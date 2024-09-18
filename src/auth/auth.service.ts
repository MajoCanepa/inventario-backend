import { UserService } from "../users/user.service";
import { IAuthService, LoginUser, LoginUserResponse } from "./interfaces/auth.interface";
import { Jwt } from "../validation/JWT";
import { BcryptAdapter } from "../validation/bcrypt-hash";
import { IUser } from "../users/interface";

export class AuthService implements IAuthService {

    constructor(
        private readonly userServices: UserService
    ) { }
  
    async login(loginUser: LoginUser): Promise<LoginUserResponse> {
        const user = await this.userServices.findByEmail(loginUser.email);
        if (!user) throw new Error('User no encontrado');

        const isValidPassword = await BcryptAdapter.compare(loginUser.password, user.password!);
        if (!isValidPassword) throw new Error('Password invalida');

        const token = await Jwt.generateToken({ id: user._id as string, role: user.role });
        if (!token) throw new Error('Error al generar el token');
        return { user, token };
    };

    logout(): void {
        throw new Error('Method not implemented.');
    };

    async register(user: IUser): Promise<LoginUserResponse> {

        // const hashedPassword = await BcryptAdapter.hash(user.password);
        const newUser = await this.userServices.create(user);
        if (!newUser) throw new Error('Error al crear el usuario');
        return this.checkToken(newUser);
    };

    async checkToken(user: IUser): Promise<LoginUserResponse> {

        const token = await Jwt.generateToken({ id: user._id as string, role: user.role });
        if (!token) throw new Error('Error al generar el token');
        return { user, token };
    };
};
