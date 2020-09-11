import * as SQLite from "expo-sqlite";
import patientsData from "../../constants/data/patientsData";

const db = SQLite.openDatabase(process.env.DATABASE_NAME);

const getPatients = (setPatientsFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("select * from patients", [], (_, { rows: { _array } }) => {
        setPatientsFunc(_array);
      });
    },
    (t, error) => {
      console.log("db error load patients");
      console.log(error);
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
      console.log("db error insertPatient");
      console.log(error);
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
    });
  });
};

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists patients " +
            "(" +
            " id integer primary key not null," +
            " name text," +
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
      },
      (_, error) => {
        console.warn("db error creating tables");
        console.error(error);
        reject(error);
      },
      (_, success) => {
        console.log("success");
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
        console.warn("db error insertPatient");
        console.error(error);
        resolve();
      },
      (t, success) => {
        console.log("db success InsertPatients");
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
};
