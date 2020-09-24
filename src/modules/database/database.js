import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import Builder, { DB } from "crane-query-builder";

const databaseFile = require(`../../assets/db/doctors_assistant.db`);

async function testDriver() {
  const dummy = SQLite.openDatabase("dummy.db");
  try {
    await dummy.transaction((tx) => tx.executeSql(""));
  } catch (e) {
    console.log("error while executing SQL in dummy DB");
  }
}

async function makeDbFile() {
  await FileSystem.downloadAsync(
    Asset.fromModule(databaseFile).uri,
    `${FileSystem.documentDirectory}SQLite/doctors_assistant.db`
  );
}

async function loadDB() {
  const dbFile = await FileSystem.getInfoAsync(
    `${FileSystem.documentDirectory}SQLite/doctors_assistant.db`
  );

  if (!dbFile.exists) {
    await makeDbFile();
  }

  DB.addConnection({
    type: "expo",
    driver: SQLite,
    name: "doctors_assistant.db",
  });
}

async function initDB() {
  await testDriver();
  await loadDB();
}

const getPatients = async (setPatientsFunc) => {
  try {
    const patients = await Builder().table("patients").get();
    console.log(patients);
    setPatientsFunc(patients);
  } catch (e) {
    console.log(`db error load patients ${e}`);
  }
};

const getBasicPatientsData = async (setBasicPatientsFunc) => {
  try {
    const patientsBasicData = await Builder()
      .table("patients_basic_data")
      .get();
    console.log(patientsBasicData);
    setBasicPatientsFunc(patientsBasicData);
  } catch (e) {
    console.log(`db error load patients basic data ${e}`);
  }
};

// eslint-disable-next-line import/prefer-default-export
export const database = {
  initDB,
  getPatients,
  getBasicPatientsData,
};
