// Action Types
export const LOGGED_IN = `auth/LOGGED_IN`;
export const LOGGED_OUT = `auth/LOGGED_OUT`;
export const BYPASS = `auth/BYPASS`;

export const initialState = {
  isLoggedIn: false,
  user: null,
};

// REDUCER
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: {
      const { user } = action;

      return { ...state, isLoggedIn: true, user };
    }

    case LOGGED_OUT: {
      return { ...state, ...initialState };
    }

    case BYPASS: {
      return { ...state, isLoggedIn: true };
    }
    default:
      return state;
  }
};

export default authReducer;
