import {WinstonLogger} from "./WinstonLogger";
import winston from "winston";

// @ts-ignore
const mockLogger: winston.Logger = {
    info: jest.fn(),
    debug: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
};
jest.spyOn(winston, "createLogger")
    .mockImplementation(() => mockLogger);

describe("Logging functions", () => {
    test("Each function defers to winston", () => {
        const Logger = new WinstonLogger();
        Logger.info("Some info");
        Logger.warn("Some warning");
        Logger.debug("Some debugging info");
        Logger.error("Some error");

        expect(mockLogger.info).toBeCalledTimes(1);
        expect(mockLogger.debug).toBeCalledTimes(1);
        expect(mockLogger.warn).toBeCalledTimes(1);
        expect(mockLogger.error).toBeCalledTimes(1);
    });
});
