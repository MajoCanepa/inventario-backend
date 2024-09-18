import { Router } from 'express';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { loginSchema, registerSchema } from './Schemas/auth.schema';
import { UserService } from '../users/user.service';
import { UserMidd } from '../middlewares/user.middleware';
import { ExpressValidatorAdapter } from '../validation/express-validator';

export class AuthRoutes {
    
    static get routes(): Router {
        const router = Router();
        
        const userService = new UserService();
        const getUser = new UserMidd(userService);
        const authService = new AuthService(userService);
        const authController = new AuthController(authService);
        const validator = ExpressValidatorAdapter.validate;
        
        router.get('/checkToken',getUser.getUser, authController.checkToken);
        router.post('/login', loginSchema, validator,  authController.login);
        router.post('/register', registerSchema, validator, authController.register);
        
        return router;
    };


};