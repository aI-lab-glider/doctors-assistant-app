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

export const TABLES = {
  diagnosis: "diagnosis",
  diagnosis_answers: "diagnosis_answers",
  patients: "patients",
  patients_basic_data: "patients_basic_data",
  patients_diagnosis: "patients_diagnosis",
  patients_psychiatric_assessment: "patients_psychiatric_assessment",
  physical_examination: "physical_examination",
  psychiatric_assessment: "psychiatric_assessment",
  questions: "questions",
  users: "users",
  modules: "modules",
  users_patients: "users_patients",
};

const getAllFromTable = async (table) => {
  try {
    const records = await Builder().table(table).get();
    console.log(`Successfully get ${records.length} from ${table} `);
    return records;
  } catch (e) {
    console.log(`db error load patients ${e}`);
    return null;
  }
};

const insertObjectToTable = async (object, table) => {
  try {
    const objectWithoutId = object;
    objectWithoutId.id = null;
    const id = await Builder().table(table).insertGetId(objectWithoutId);
    console.log(`Successfully insert object to ${table} with ${id}`);
    return id;
  } catch (e) {
    console.log(`DB error insert object to ${table} ${e[0]}`);
    return null;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const database = {
  initDB,
  getAllFromTable,
  insertObjectToTable,
};
