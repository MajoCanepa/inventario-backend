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
exports.AuthService = void 0;
const JWT_1 = require("../helpers/JWT");
const bcrypt_1 = require("../helpers/bcrypt");
class AuthService {
    constructor(userServices) {
        this.userServices = userServices;
    }
    // se define un método login que recibe un objeto de tipo LoginUser y devuelve una promesa de tipo LoginUserResponse
    // el método busca un usuario por email, si no lo encuentra lanza un error
    // si lo encuentra, compara la contraseña con el hash almacenado en la base de datos
    // si la contraseña es incorrecta lanza un error
    // si la contraseña es correcta, genera un token con el id del usuario y lo devuelve junto con el usuario
    login(loginUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userServices.findByEmail(loginUser.email);
            if (!user)
                throw new Error('User not found');
            const isValidPassword = yield bcrypt_1.BcryptAdapter.compare(loginUser.password, user.password);
            if (!isValidPassword)
                throw new Error('Invalid password');
            const token = yield JWT_1.JwtAdapter.generateToken({ id: user._id });
            if (!token)
                throw new Error('Error generating token');
            return { user, token };
        });
    }
    ;
    // 
    logout() {
        throw new Error('Method not implemented.');
    }
    ;
    // se define un método register que recibe un usuario y devuelve una promesa de tipo LoginUserResponse
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield this.userServices.create(user);
            if (!newUser)
                throw new Error('Error creating user');
            return this.checkToken(newUser);
        });
    }
    ;
    // se define un método checkToken que recibe un usuario y devuelve una promesa de tipo LoginUserResponse
    checkToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield JWT_1.JwtAdapter.generateToken({ id: user._id });
            if (!token)
                throw new Error('Error generating token');
            return { user, token };
        });
    }
    ;
}
exports.AuthService = AuthService;
;
