"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor({ port, routes }) {
        this.app = (0, express_1.default)(); // se define la propiedad app de tipo Application, que es igual a express(); read-only para que no se pueda modificar
        this.port = port;
        this.routes = routes;
        this.middlewares();
    }
    ;
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use('/', this.routes);
    }
    ;
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on  http://localhost:${this.port}`);
        });
    }
    ;
}
exports.Server = Server;
