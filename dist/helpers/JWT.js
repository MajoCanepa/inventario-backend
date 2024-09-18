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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapter = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envs_1 = require("../config/envs");
;
const secretKey = envs_1.enviroments.JWT_SECRET;
class JwtAdapter {
    // el método generateToken recibe un objeto de tipo Payload y un string con la duración del token
    static generateToken(payload_1) {
        return __awaiter(this, arguments, void 0, function* (payload, duration = '2h') {
            return new Promise((resolve, reject) => {
                jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: duration }, (err, token) => {
                    if (err) {
                        resolve(null);
                    }
                    else {
                        resolve(token);
                    }
                });
            });
        });
    }
    ;
    // el método verifyToken recibe un string con el token y devuelve una promesa de tipo T o null
    static verifyToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                jsonwebtoken_1.default.verify(token, secretKey, (err, decoded) => {
                    if (err)
                        resolve(null);
                    resolve(decoded);
                });
            });
        });
    }
}
exports.JwtAdapter = JwtAdapter;
