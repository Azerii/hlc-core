import {WinstonLogger} from "./winston/WinstonLogger";

export interface Logger {
    info: (message: string) => void,
    warn: (message: string) => void,
    debug: (message: string) => void,
    error: (message: string) => void
}

const logger: Logger = new WinstonLogger();

export default logger;
