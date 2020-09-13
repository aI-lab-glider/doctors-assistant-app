import React, { useMemo, useReducer, useContext } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import PropTypes from "prop-types";
import { TOKEN_KEY, USER_KEY } from "../../constants/keys/Auth";

// IMPORT REDUCER, INITIAL STATE AND ACTION TYPES
import reducer, {
  initialState,
  LOGGED_IN,
  LOGGED_OUT,
  BYPASS,
} from "./AuthReducer";

// CONFIG KEYS [Storage Keys]===================================
export const keys = [TOKEN_KEY, USER_KEY];

// CONTEXT ===================================
const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState || {});

  // Get Auth state
  const getAuthState = async () => {
    try {
      // GET TOKEN && USER
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      let user = await SecureStore.getItemAsync(USER_KEY);
      user = JSON.parse(user);

      if (token !== null && user !== null) await handleLogin({ token, user });
      else await handleLogout();

      return { token, user };
    } catch (error) {
      throw new Error(error);
    }
  };

  // Handle Login
  const handleLogin = async (data) => {
    try {
      // STORE DATA
      const { token, user } = data;

      // TODO use Promise.all for multiple Key sets
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
      await SecureStore.setItemAsync(TOKEN_KEY, token);

      // AXIOS AUTHORIZATION HEADER
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      // DISPATCH TO REDUCER
      dispatch({ type: LOGGED_IN, user: data.user });
    } catch (error) {
      throw new Error(error);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      // REMOVE DATA

      // TODO? use Promise.all for multiple Key sets
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      await SecureStore.deleteItemAsync(USER_KEY);

      // AXIOS AUTHORIZATION HEADER
      delete axios.defaults.headers.common.Authorization;

      // DISPATCH TO REDUCER
      dispatch({ type: LOGGED_OUT });
    } catch (error) {
      throw new Error(error);
    }
  };

  // UPDATE USER LOCAL STORAGE DATA AND DISPATCH TO REDUCER
  const updateUser = async (user) => {
    try {
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
      dispatch({ type: LOGGED_IN, user }); // DISPATCH TO REDUCER
    } catch (error) {
      throw new Error(error);
    }
  };

  const bypass = () => {
    dispatch({ type: BYPASS });
  };

  const value = useMemo(() => {
    return {
      state,
      getAuthState,
      handleLogin,
      handleLogout,
      updateUser,
      bypass,
    };
  }, [state]);

  AuthProvider.propTypes = {
    children: PropTypes.node,
  };

  AuthProvider.defaultProps = {
    children: {},
  };

  const { children } = props;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth };
export default AuthProvider;
