import { useEffect, useState } from "react";
import Builder from "crane-query-builder";
import { TABLES } from "../database/database";

const useModules = () => {
  const [modulesData, setModules] = useState([]);

  useEffect(() => {
    const fetchModulesFromDb = async () => {
      const modules = await Builder().table(TABLES.modules).get();
      setModules(modules);
    };
    fetchModulesFromDb();
  }, []);

  return [modulesData];
};

export default useModules;
