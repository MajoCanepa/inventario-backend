"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_1 = require("express");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
const express_validator_1 = require("../helpers/express-validator");
const user_schemas_1 = require("./schemas/user.schemas");
class UsersRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userServices = new user_service_1.UserService();
        const userController = new user_controller_1.UserController(userServices);
        const validator = express_validator_1.ExpressValidatorAdapter.validate;
        router.get('/api/', userController.findAll);
        router.get('/api/:id', userController.findOne);
        router.post('/api/', user_schemas_1.createUserSchema, validator, userController.create);
        router.put('/api/:id', user_schemas_1.updateUserSchema, validator, userController.update);
        router.delete('/api/:id', userController.remove);
        return router;
    }
    ;
}
exports.UsersRoutes = UsersRoutes;
;
