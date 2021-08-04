import winston from "winston";
import {Logger} from "../index";

export class WinstonLogger implements Logger {

    private readonly logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.Console()
            ]
        });
    }

    info = (message: string) => {
        this.logger.info(message);
    };
    debug = (message: string) => {
        this.logger.debug(message);
    };
    warn = (message: string) => {
        this.logger.warn(message);
    };
    error = (message: string) => {
        this.logger.error(message);
    };

}
