"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviroments = void 0;
require("dotenv/config");
exports.enviroments = {
    port: +process.env.PORT, //confíe, no es null
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
};
