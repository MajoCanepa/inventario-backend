"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeRoleSchema = exports.changePasswordSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const express_validator_1 = require("express-validator");
exports.createUserSchema = [
    (0, express_validator_1.body)("name").exists().withMessage("Name is required"),
    (0, express_validator_1.body)("email").exists().withMessage("Email is required"),
    (0, express_validator_1.body)("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];
exports.updateUserSchema = [
    (0, express_validator_1.body)("name").exists().withMessage("Name is required"),
    (0, express_validator_1.body)("email").exists().withMessage("Email is required"),
];
exports.changePasswordSchema = [
    (0, express_validator_1.body)("oldPassword").exists().withMessage("Old password is required"),
    (0, express_validator_1.body)("newPassword").isLength({ min: 6 }).withMessage("New password must be at least 6 characters"),
];
exports.changeRoleSchema = [
    (0, express_validator_1.body)("role").exists().withMessage("Role is required"),
];
