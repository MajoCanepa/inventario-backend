import { Request, Response, NextFunction } from "express";
import { Jwt } from "../validation/JWT";
import { UserService } from "../users/user.service";
import { IUser } from "../users/interface/user.interface";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export class EquipmentMiddleware {
  constructor(private userService: UserService) {}

  checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "No Autorizado, falta token" });
    }

    const payload = await Jwt.verifyToken<{ id: string }>(token);
    if (!payload) {
      return res.status(401).json({ error: "Token Inválido" });
    }

    const user = await this.userService.findOne(payload.id);

    if (!user) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ error: "No Autorizado" });
    }

    req.user = user as IUser;

    next();
  };
}
