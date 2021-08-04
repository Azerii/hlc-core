import {Controller} from "../../common/interface/controller.interface";
import {ChargeController} from "./charge.controller";

export const PAYMENT_CONTROLLERS: Controller[] = [
    new ChargeController()
];
