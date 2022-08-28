import * as SQLite from "expo-sqlite";

const SQLiteDatabase: SQLite.WebSQLDatabase = (function initializeDatabase(): SQLite.WebSQLDatabase {
  const name: string = "AventaSQLiteDatabase";
  const version: string = "0.1";
  const description: string = "Aventa database";

  return SQLite.openDatabase(name, version, description);
})();

export { SQLiteDatabase };
