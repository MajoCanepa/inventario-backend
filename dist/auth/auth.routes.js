"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const auth_schema_1 = require("./Schemas/auth.schema");
const user_service_1 = require("../users/user.service");
const getUser_middleware_1 = require("../middlewares/getUser.middleware");
const express_validator_1 = require("../helpers/express-validator");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const getUser = new getUser_middleware_1.GetUserMiddleware(userService);
        const authService = new auth_service_1.AuthService(userService);
        const authController = new auth_controller_1.AuthController(authService);
        const validator = express_validator_1.ExpressValidatorAdapter.validate;
        router.get('/checkToken', getUser.getUser, authController.checkToken);
        router.post('/login', auth_schema_1.loginSchema, validator, authController.login);
        router.post('/register', auth_schema_1.registerSchema, validator, authController.register);
        return router;
    }
    ;
}
exports.AuthRoutes = AuthRoutes;
;
