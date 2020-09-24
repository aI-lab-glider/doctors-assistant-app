import React, { useEffect } from "react";

import { database } from "../database/database";

function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadDataAsync() {
      try {
        await database.initDB();

        setDBLoadingComplete(true);
      } catch (e) {
        console.warn(e);
      }
    }

    loadDataAsync();
  }, []);

  return isDBLoadingComplete;
}

export default useDatabase;
