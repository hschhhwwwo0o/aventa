import { initializeSQLiteTables } from "./_/initializeTables.sqlite";
import { SQLiteDatabase } from "./_/database.sqlite";

export const SQLiteClient = Object.freeze({
  initialize: initializeSQLiteTables,
  table: {
    goals: {},
    transactions: {},
  },
});
