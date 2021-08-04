import restify, {Server} from 'restify';
import {ALL_CONTROLLERS} from './server/controllers';
import {Controller} from "./common/interface/controller.interface";
import {config} from "./server/config";
import Logger from "./server/logger";

const server: Server = restify.createServer();
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

ALL_CONTROLLERS.forEach((controller: Controller) => {
    controller.initialize(server);
});

server.listen(config.port, () => {
    Logger.info(`${server.name} listening at ${server.url}`);
});
