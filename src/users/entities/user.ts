import { Schema, model } from "mongoose";
import { ValidRoles } from "../interface";
import { IUser } from "../interface/user.interface";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(ValidRoles),
        default: ValidRoles.USER,
    },
},{
    timestamps: true
});

export const User = model<IUser>('User', UserSchema);
