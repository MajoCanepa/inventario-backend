// user.middleware.ts
import { Request, Response, NextFunction } from "express";
import { Jwt } from "../validation/JWT";
import { UserService } from "../users/user.service";
import { IUser } from "../users/interface";
import { ValidRoles } from "../users/interface/valid-roles.interface";

export class UserMidd {
  constructor(private readonly userService: UserService) {}

  getUser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extraer el token del encabezado
    if (!token) return res.status(401).json({ message: 'No autorizado, falta token' });

    const payload = await Jwt.verifyToken<{ id: string }>(token);
    if (!payload) return res.status(401).json({ message: 'Token inválido' });

    const user = await this.userService.findOne(payload.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    req.user = user as IUser;
    next();
  };

  checkRole = (roles: ValidRoles[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
      const user = req.user as IUser;
      if (!user) return res.status(401).json({ message: 'No autorizado' });
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: 'Prohibido: Rol insuficiente' });
      }
      next();
    };
  };
}