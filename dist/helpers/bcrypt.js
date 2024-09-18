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
exports.BcryptAdapter = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
// Se crea una clase BcryptAdapter con dos métodos estáticos: hash y compare
class BcryptAdapter {
    // el método hash recibe una contraseña y devuelve una promesa de tipo string
    static hash(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt_1.default.hash(password, 10);
        });
    }
    // el método compare recibe una contraseña y un hash y devuelve una promesa de tipo boolean
    static compare(password, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt_1.default.compare(password, hash);
        });
    }
}
exports.BcryptAdapter = BcryptAdapter;
;
