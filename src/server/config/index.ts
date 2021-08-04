import dotEnv from "dotenv";
import path from "path";

const pathConfig = {path: process.env.NODE_ENV ? path.join(__dirname, `../../../.env.${process.env.NODE_ENV}`) : undefined};

dotEnv.config({
    ...pathConfig
});

interface DatabaseConfiguration {
    debugMode: boolean
    host: string | undefined
    port: string | undefined
    dialect: string | undefined
    username: string | undefined
    password: string | undefined
    database: string | undefined
}

interface ServerConfiguration {
    db: DatabaseConfiguration,
    port: string | number,
    form: FormOptions
}

interface FormOptions {
    defaultVersion: string
    defaultCode: string
}

export const config: ServerConfiguration = {
    db: {
        debugMode: process.env.DB_DEBUG_MODE === 'true',
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    port: process.env.PORT || 3000,
    form: {
        defaultCode: "FORM12345",
        defaultVersion: "1"
    }
};
