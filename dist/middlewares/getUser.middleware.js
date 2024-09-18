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
exports.GetUserMiddleware = void 0;
const JWT_1 = require("../helpers/JWT");
class GetUserMiddleware {
    constructor(userService) {
        this.userService = userService;
        // el método getUser recibe una petición, una respuesta y una función next
        // verifica si existe un token en los headers de la petición
        // verifica si el token es válido
        // busca al usuario en la base de datos
        // si no existe devuelve un status 404
        // si existe almacena el usuario en la petición y llama a la función next
        this.getUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            if (!token)
                return res.status(401).json({ message: 'Unauthorized' });
            const payload = yield JWT_1.JwtAdapter.verifyToken(token);
            if (!payload)
                return res.status(401).json({ message: 'Unauthorized' });
            const user = yield this.userService.findOne(payload.id);
            if (!user)
                return res.status(404).json({ message: 'User not found' });
            req.user = user;
            next();
        });
    }
    ;
}
exports.GetUserMiddleware = GetUserMiddleware;
