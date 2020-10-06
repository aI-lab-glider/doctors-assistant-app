import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import Builder, { DB } from "crane-query-builder";

const databaseName = "doctors_assistant.db";
const databaseFile = require(`../../assets/db/doctors_assistant.db`);
const testDatabaseName = "dummy.db";
const reloadDatabase = false;

async function testDriver() {
  const dummy = SQLite.openDatabase(testDatabaseName);
  try {
    await dummy.transaction((tx) => tx.executeSql(""));
  } catch (e) {
    console.log("error while executing SQL in dummy DB");
  }
}

async function makeDbFile() {
  await FileSystem.downloadAsync(
    Asset.fromModule(databaseFile).uri,
    `${FileSystem.documentDirectory}SQLite/${databaseName}`
  );
}

async function loadDB() {
  const dbFile = await FileSystem.getInfoAsync(
    `${FileSystem.documentDirectory}SQLite/${databaseName}`
  );

  if (!dbFile.exists || reloadDatabase) {
    await makeDbFile();
  }

  DB.addConnection({
    type: "expo",
    driver: SQLite,
    name: databaseName,
  });
}

async function initDB() {
  await testDriver();
  await loadDB();
}

const getPatients = async () => {
  try {
    const patients = await Builder().table("patients").get();
    console.log(`Successfully get ${patients.length} patients`);
    return patients;
  } catch (e) {
    console.log(`db error load patients ${e}`);
    return null;
  }
};

const getBasicPatientsData = async () => {
  try {
    const patientsBasicData = await Builder()
      .table("patients_basic_data")
      .get();
    console.log(
      `Successfully get ${patientsBasicData.length} patientsBasicData`
    );
    return patientsBasicData;
  } catch (e) {
    console.log(`db error load patients basic data ${e}`);
    return null;
  }
};

const insertPatientGetId = async (patient) => {
  try {
    const patientWithoutId = patient;
    patientWithoutId.id = null;
    const id = await Builder().table("patients").insertGetId(patientWithoutId);
    console.log(`Successfully insert patient with ${id}`);
    return id;
  } catch (e) {
    console.log(`DB error insert patient ${e[0]}`);
    return null;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const database = {
  initDB,
  getPatients,
  getBasicPatientsData,
  insertOrUpdatePatient: insertPatientGetId,
};
