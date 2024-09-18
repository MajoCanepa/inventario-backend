import { Request, Response, Router } from "express";
import { UsersRoutes } from "../users/user.routes";
import { AuthRoutes } from "../auth/auth.routes";
import { EquipmentRoutes } from "../equipments/equipment.routes";


export class AppRouter {
  static get routes(): Router {
    const router = Router();

    router.get("/", (req: Request, res: Response) => {
      res.send("Formotex API");
    });
    
    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/users", UsersRoutes.routes);
    router.use("/api/equipment",  EquipmentRoutes.routes);

    return router;
  }
}
