import {KnexDatabaseProvider} from "../KnexDatabaseProvider";
import Knex = require("knex");
import Logger from "../../../logger";

let db: Knex;

beforeAll(() => {
    db = new KnexDatabaseProvider({}).getConnection();
});

afterAll(async () => {
    await db.raw(`DROP TABLE someTable`);
    await db.destroy();
});

describe("Database Connection", () => {

    test("using simple database operations", async () => {
        await db.raw(`
            CREATE TABLE someTable
            (
                name   varchar(65),
                number int
            )
        `);

        await db.raw(`
            INSERT INTO someTable
                (name, number)
            VALUES ('Roberto', 56),
                   ('Gigi', 34);
        `);


        const num = await db.raw(`
            SELECT COUNT(*)
            from someTable
        `);

        expect(parseInt(num.rows[0].count, 0)).toEqual(2);
        Logger.info("We're good so far");
    });
});
