import { SQLTransaction } from "expo-sqlite";
import { SQLiteDatabase } from "./database.sqlite";

/**
 * Initialization of database tables when the application
 * is run for the first time
 */
function initializeSQLiteTables(): void {
  const tables = [
    {
      name: "goals",
      fields: "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL)",
    },
    {
      name: "transactions",
      fields: "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL)",
    },
  ];

  SQLiteDatabase.transaction(function _init(_transaction: SQLTransaction): void {
    for (let table of tables) {
      const request: string = `CREATE TABLE IF NOT EXISTS ${table.name} ${table.fields};`;
      _transaction.executeSql(request);
    }
  });
}

export { initializeSQLiteTables };
