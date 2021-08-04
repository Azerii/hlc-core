import {Server} from "restify";

export interface Controller {
    initialize: (app: Server) => void
}
