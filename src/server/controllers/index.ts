import {PAYMENT_CONTROLLERS} from '../../payment/controllers';
import {Controller} from "../../common/interface/controller.interface";

export const ALL_CONTROLLERS: Controller[] = [
    ...PAYMENT_CONTROLLERS
];
