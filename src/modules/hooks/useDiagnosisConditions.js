import { useEffect, useState } from "react";
import Builder from "crane-query-builder";
import { TABLES } from "../database/database";

const useDiagnosisConditions = (moduleCode) => {
  const [diagnosisData, setDiagnosisData] = useState([]);

  useEffect(() => {
    const fetchDiagnosisConditionsFromDb = async () => {
      const diagnosisConditions = await Builder()
        .table(TABLES.diseases)
        .where("module_code", moduleCode)
        .join(
          TABLES.diagnosis_conditions,
          `${TABLES.diseases}.id`,
          "=",
          `${TABLES.diagnosis_conditions}.disease_id`
        )
        .get();
      setDiagnosisData(diagnosisConditions);
    };
    fetchDiagnosisConditionsFromDb();
  }, []);

  return [diagnosisData];
};

export default useDiagnosisConditions;
