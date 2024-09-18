"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
const user_routes_1 = require("../users/user.routes");
const auth_routes_1 = require("../auth/auth.routes");
class AppRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        router.get('/', (req, res) => {
            res.send('Hello Typescripero');
        });
        router.use('/api/auth', auth_routes_1.AuthRoutes.routes);
        router.use('/api/users', user_routes_1.UsersRoutes.routes);
        return router;
    }
    ;
}
exports.AppRouter = AppRouter;
;
