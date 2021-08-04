import {KnexDatabaseProvider} from "./knex/KnexDatabaseProvider";
import Knex from "knex";

export interface DatabaseProvider {
    getConnection: () => Knex
}

const databaseInstance: DatabaseProvider = new KnexDatabaseProvider({});

export default databaseInstance.getConnection();
