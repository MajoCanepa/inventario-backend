"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const interface_1 = require("../interface");
const UserSchema = new mongoose_1.Schema({
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
        default: interface_1.ValidRoles.USER,
    },
}, {
    timestamps: true,
    versionKey: false
});
exports.User = (0, mongoose_1.model)('User', UserSchema);
