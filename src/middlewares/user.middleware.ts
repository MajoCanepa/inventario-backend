
import { Request, Response, NextFunction } from "express";
import { Jwt } from "../validation/JWT";
import { UserService } from "../users/user.service";
import { IUser } from "../users/interface";

export class UserMidd {

    constructor(private readonly userService: UserService) {};

     getUser = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;  
        if (!token) return res.status(401).json({ message: 'No autorizado' }); 
        
        const payload = await Jwt.verifyToken<{id:string}>(token);  
        if (!payload) return res.status(401).json({ message:  'No autorizado' });  

        const user = await this.userService.findOne(payload.id);  
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });  
        req.user = user as IUser;  
    };
}