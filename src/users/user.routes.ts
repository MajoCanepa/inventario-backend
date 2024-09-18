import { Router } from 'express';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ExpressValidatorAdapter } from '../validation/express-validator';
import { createUserSchema, updateUserSchema } from './schemas/user.schemas';

export class UsersRoutes {

    static get routes(): Router {

        const router = Router();

        const userServices = new UserService();
        const userController = new UserController(userServices);
        const validator = ExpressValidatorAdapter.validate;

        // router.get('/api/', userController.findAll);
        // router.get('/api/:id', userController.findOne);
        router.post('/api/', createUserSchema, validator, userController.create);
        router.put('/api/:id', updateUserSchema, validator, userController.update);
        // router.delete('/api/:id', userController.remove);

        return router;
    };
};