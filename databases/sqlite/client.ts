import { initializeSQLiteTables } from "./_/initializeTables.sqlite";
import { SQLiteDatabase } from "./_/database.sqlite";

/** Queries */
import { deleteGoalQuery } from "./_/goals/deleteGoal";
import { insertGoalQuery } from "./_/goals/insertGoal";
import { selectGoalQuery } from "./_/goals/selectGoal";
import { selectGoalsQuery } from "./_/goals/selectGoals";
import { insertTransactionQuery } from "./_/transactions/insertTransaction";
import { selectTransactionsQuery } from "./_/transactions/selectTransactions";

interface ITableQueries {
  delete?: (any?: any) => void;
  insert?: (any?: any) => void;
  select?: (any?: any) => void;
  selectMany?: (any?: any) => void;
}

export interface ISQLiteClient {
  initialize: () => void;
  table: {
    goals: ITableQueries;
    transactions: ITableQueries;
  };
}

export const SQLiteClient: ISQLiteClient = Object.freeze({
  initialize: initializeSQLiteTables,
  table: {
    goals: {
      delete: deleteGoalQuery,
      insert: insertGoalQuery,
      select: selectGoalQuery,
      selectMany: selectGoalsQuery,
    },
    transactions: {
      insert: insertTransactionQuery,
      selectMany: selectTransactionsQuery,
    },
  },
});
