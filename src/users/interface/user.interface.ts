import { ObjectId } from "mongoose";
import { ValidRoles } from "./valid-roles.interface";

export interface IUser {
    _id?: string | ObjectId;
    name: string;
    email: string;
    password: string;
    role: ValidRoles;
};

export interface IUserService {
    create(user: IUser): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findOne(id: string): Promise<IUser>;
    update(id: string, user: IUser): Promise<void>;
    updatePassword(id: string, password: string): Promise<void>;
    changeRole(id: string, role: string): Promise<void>;
    remove(id: string): Promise<void>;
};