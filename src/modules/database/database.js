import * as SQLite from "expo-sqlite";
import patientsData from "../../constants/data/patientsData";
import diagnosisData from "../../constants/data/diagnosisData";

const db = SQLite.openDatabase(process.env.DATABASE_NAME);

const getPatients = (setPatientsFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("select * from patients", [], (_, { rows: { _array } }) => {
        setPatientsFunc(_array);
      });
    },
    (t, error) => {
      console.log(`db error load patients ${error}`);
    },
    () => {
      console.log("db load patients");
    }
  );
};

const insertPatient = (patientName, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into patients (name) values (?)", [patientName]);
    },
    (t, error) => {
      console.log(`db error insertPatient ${error}`);
    },
    () => {
      successFunc();
    }
  );
};

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "drop table if exists patients",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.warn("error dropping patients table");
          reject(error);
        }
      );
      tx.executeSql(
        "drop table if exists diagnosis",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.warn("error dropping patients table");
          reject(error);
        }
      );
      tx.executeSql(
        "drop table if exists patients_diagnosis",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.warn("error dropping patients table");
          reject(error);
        }
      );
    });
  });
};

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS patients " +
            "(" +
            " id INTEGER primary key not null," +
            " name TEXT," +
            " surname text," +
            " sex text," +
            " pesel text," +
            " date_of_birth text," +
            " weight integer," +
            " height integer," +
            " bmi integer," +
            " note text," +
            " phone text," +
            " person_authorized text," +
            " phone_authorized text," +
            " guardianship boolean," +
            " hospitalization_times INTEGER," +
            " code text" +
            ");"
        );

        tx.executeSql(
          "create table if not exists diagnosis" +
            "(" +
            "id integer primary key," +
            "code text not null," +
            "name text not null" +
            ")"
        );
        tx.executeSql(
          "create table if not exists patients_diagnosis " +
            "(" +
            " id integer primary key not null," +
            " patient_id integer not null," +
            " diagnosis_id integer not null," +
            " FOREIGN KEY(patient_id) REFERENCES patients," +
            " FOREIGN KEY(diagnosis_id) REFERENCES diagnosis" +
            ")"
        );
        // tx.executeSql(
        //   "create table if not exists patients_medicines " +
        //     "(" +
        //     " id integer primary key not null," +
        //     " patient_id integer foreign key not null," +
        //     " medicine_id integer foreign key not null," +
        //     ")"
        // );
        // tx.executeSql(
        //   "create table if not exists medicines" +
        //     "(" +
        //     " id integer primary key not null," +
        //     " name text not null," +
        //     ")"
        // );
      },
      (_, error) => {
        console.error(`db error creating tables ${error}`);
        reject(error);
      },
      (_, success) => {
        console.log("db create success");
        resolve(success);
      }
    );
  });
};

const setupPatientsAsync = async () => {
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        patientsData.forEach((patient) => {
          tx.executeSql(
            "insert into patients " +
              "(id, name, surname, sex, pesel," +
              "date_of_birth, weight, height," +
              "bmi, note, phone, person_authorized," +
              "phone_authorized, guardianship, hospitalization_times, code)" +
              "values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [
              patient.id,
              patient.name,
              patient.surname,
              patient.sex,
              patient.pesel,
              patient.date_of_birth,
              patient.weight,
              patient.height,
              patient.bmi,
              patient.note,
              patient.phone,
              patient.person_authorized,
              patient.phone_authorized,
              patient.guardianship,
              patient.hospitalization_times,
              patient.code,
            ]
          );
        });
      },
      (t, error) => {
        console.warn(`db error insertPatient ${error}`);
        resolve();
      },
      (t, success) => {
        console.log("db success InsertPatients");
        resolve(success);
      }
    );
  });
};

const setupPatientsDiagnosisAsync = async () => {
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into patients_diagnosis " +
            "(id, patient_id, diagnosis_id) " +
            " values (?,?,?)",
          [1, 1, 1]
        );
      },
      (t, error) => {
        console.warn(`db error insert Patient diagnosis ${error}`);
        resolve();
      },
      (t, success) => {
        console.log("db success insert Patient diagnosis ");
        resolve(success);
      }
    );
  });
};

const setupDiagnosisAsync = async () => {
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        diagnosisData.forEach((diagnosis) => {
          tx.executeSql(
            // eslint-disable-next-line no-useless-concat
            "insert into diagnosis  " + " (id, code, name)" + " values (?,?,?)",
            [diagnosis.id, diagnosis.code, diagnosis.name]
          );
        });
      },
      (t, error) => {
        console.warn(`db error insert diagnosis ${error}`);
        resolve();
      },
      (t, success) => {
        console.log("db success insert diagnosis ");
        resolve(success);
      }
    );
  });
};

// eslint-disable-next-line import/prefer-default-export
export const database = {
  getPatients,
  insertPatient,
  setupDatabaseAsync,
  setupPatientsAsync,
  dropDatabaseTablesAsync,
  setupPatientsDiagnosisAsync,
  setupDiagnosisAsync,
};
