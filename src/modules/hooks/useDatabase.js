import React, { useEffect } from "react";

import { database } from "../database/database";

function useDatabase() {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false);

  useEffect(() => {
    async function loadDataAsync() {
      try {
        await database.dropDatabaseTablesAsync();
        await database.setupDatabaseAsync();
        await database.setupPatientsAsync();
        await database.setupDiagnosisAsync();
        await database.setupPatientsDiagnosisAsync();

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
