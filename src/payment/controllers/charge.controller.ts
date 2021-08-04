import {Controller} from "../../common/interface/controller.interface";
import {Next, Request, Response, Server} from "restify";

export class ChargeController implements Controller {

    initialize = (app: Server) => {
        app.get("/", this.getInitialTestRequest);
    };

    getInitialTestRequest = (req: Request, res: Response, next: Next): void => {
        res.send("Hi");
        return next();
    }

}
