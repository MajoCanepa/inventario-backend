"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const AppRouter_1 = require("./router/AppRouter");
const envs_1 = require("./config/envs");
const db_1 = require("./database/db");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const server = new server_1.Server({
        port: envs_1.enviroments.port,
        routes: AppRouter_1.AppRouter.routes
    });
    const db = new db_1.DB({
        mongoUrl: envs_1.enviroments.MONGO_URL,
        dbName: envs_1.enviroments.DB_NAME
    });
    yield db.connect();
    server.start();
}))();
