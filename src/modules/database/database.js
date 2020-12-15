import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import Builder, { DB } from "crane-query-builder";
import { Alert } from "react-native";

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
  diagnosis_answers: "diagnosis_answers",
  diagnosis_conditions: "diagnosis_conditions",
  diseases: "diseases",
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

const showDatabaseError = (
  e,
  message = "Nie można połączyć się z bazą danych. Skontaktuj się ze wsparciem technicznym."
) => {
  const alertMessage =
    process.env.NODE_ENV === "development"
      ? `${message}\n ${e.message}`
      : message;
  Alert.alert("Błąd", alertMessage, [
    {
      text: "Ok",
      style: "cancel",
      onPress: () => {},
    },
  ]);
};

const getAllFromTable = async (table) => {
  try {
    const records = await Builder().table(table).get();
    console.log(`Successfully get ${records.length} from ${table} `);
    return records;
  } catch (e) {
    showDatabaseError(e);
    throw e;
  }
};

const insertObjectToTable = async (object, table) => {
  try {
    const objectWithoutId = object;
    objectWithoutId.id = null;
    const id = await Builder().table(table).insertGetId(objectWithoutId);
    console.log(`Successfully insert object to ${table} with id ${id}`);
    return id;
  } catch (e) {
    showDatabaseError(e);
    throw e;
  }
};

const updateObjectFromTable = async (object, table) => {
  try {
    const result = await Builder()
      .table(table)
      .where("id", "=", object.id)
      .update(object);
    console.log(
      `Successfully update object from ${table} with id ${object.id}`
    );
    return result;
  } catch (e) {
    showDatabaseError(e);
    throw e;
  }
};

const insertMultipleObjectsToTable = async (objectsArray, table) => {
  try {
    await Builder().table(table).insert(objectsArray);
    console.log(`Successfully add ${objectsArray.length} objects to ${table}`);
    return true;
  } catch (e) {
    showDatabaseError(e);
    throw e;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const database = {
  initDB,
  getAllFromTable,
  insertObjectToTable,
  updateObjectFromTable,
  insertMultipleObjectsToTable,
};
