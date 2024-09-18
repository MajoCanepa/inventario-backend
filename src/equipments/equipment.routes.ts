import { Router } from 'express';
import { EquipmentController } from './equipment.controller';
import { EquipmentMiddleware } from '../middlewares/equipment.middleware';
import { UserService } from '../users/user.service';
import { EquipmentService } from './equipment.service';


export class EquipmentRoutes {

    static get routes(): Router {
        
      const router = Router();
      const userService = new UserService();
      const equipmentMiddleware = new EquipmentMiddleware(userService);
      const equipmentService = new EquipmentService();
      const equipmentController = new EquipmentController(equipmentService);

      // rutas protegidas por el middleware checkAdmin
      router.post('/', equipmentMiddleware.checkAdmin, equipmentController.create)
      router.put('/:id', equipmentMiddleware.checkAdmin, equipmentController.update)
      router.delete('/:id', equipmentMiddleware.checkAdmin, equipmentController.remove)

      // rutas públicas
      router.get('/', equipmentController.findAll)
      router.get('/:id', equipmentController.findOne)

        return router;
    }
}
