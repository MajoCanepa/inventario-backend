
import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  handleErrors(error: any, res: Response) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'El usuario con el email ya existe' });
    } else if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }

  login = async (req: Request, res: Response) => {
    try {
      const login = await this.authService.login(req.body);
      res.status(200).json(login);
    } catch (error) {
      this.handleErrors(error, res);
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      const register = await this.authService.register(req.body);
      res.status(200).json(register);
    } catch (error) {
      this.handleErrors(error, res);
    }
  };

  checkToken = async (req: Request, res: Response) => {
    try {
      const checkToken = await this.authService.checkToken(req.user!);
      res.status(200).json(checkToken);
    } catch (error) {
      this.handleErrors(error, res);
    }
  };
}