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
exports.AuthController = void 0;
class AuthController {
    constructor(authService) {
        this.authService = authService;
        // se define un método login que recibe una petición y una respuesta
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const login = yield this.authService.login(req.body); // se llama al método login del servicio authService
                res.status(200).json(login);
            }
            catch (error) {
                this.handleErrors(error, res);
            }
            ;
        });
        // se define un método register que recibe una petición y una respuesta
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const register = yield this.authService.register(req.body);
                res.status(200).json(register);
            }
            catch (error) {
                this.handleErrors(error, res);
            }
            ;
        });
        // se define un método checkToken que recibe una petición y una respuesta
        this.checkToken = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const checkToken = yield this.authService.checkToken(req.user);
                res.status(200).json(checkToken);
            }
            catch (error) {
                this.handleErrors(error, res);
            }
            ;
        });
    }
    ;
    // se define un método handleErrors que recibe un error y una respuesta
    handleErrors(error, res) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'User with that email already exists' });
        }
        else if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
    ;
}
exports.AuthController = AuthController;
;
