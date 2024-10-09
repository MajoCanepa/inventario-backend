import { Request, Response, Router } from "express";
import { UsersRoutes } from "../users/user.routes";
import { AuthRoutes } from "../auth/auth.routes";
import { EquipmentRoutes } from "../equipments/equipment.routes";
import { UserService } from "../users/user.service";
import { UserMidd } from "../middlewares/user.middleware";
import {ValidRoles} from '../users/interface/valid-roles.interface'


export class AppRouter {
  static get routes(): Router {
    const router = Router();

    const userService = new UserService();
    const userMidd = new UserMidd(userService);

    router.get("/", (req: Request, res: Response) => {
      res.send("Formotex API");
    });
    
    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/users", userMidd.getUser, userMidd.checkRole([ValidRoles.ADMIN]), UsersRoutes.routes);
    router.use("/api/equipment", userMidd.getUser, userMidd.checkRole([ValidRoles.ADMIN]), EquipmentRoutes.routes);

    return router;
  }
}
