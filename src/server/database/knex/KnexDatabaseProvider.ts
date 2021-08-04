import Knex from "knex"
import {DatabaseProvider} from "../index";
import {config} from "../../config";

export class KnexDatabaseProvider implements DatabaseProvider {

    private readonly defaultConfig = {
        debug: config.db.debugMode,
        client: config.db.dialect,
        connection: {
            host: config.db.host,
            user: config.db.username,
            password: config.db.password,
            database: config.db.database
        }
    };
    private readonly config = {};

    constructor(dbConfig: object) {
        this.config = {...this.defaultConfig, ...dbConfig};
    }

    getConnection(): Knex {
        return Knex(this.config);
    }
}

export default new KnexDatabaseProvider({}).getConnection();
