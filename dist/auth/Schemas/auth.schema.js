"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const express_validator_1 = require("express-validator");
exports.registerSchema = [
    (0, express_validator_1.body)('name').isString().withMessage('Name must be a string').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Email is not valid'),
    (0, express_validator_1.body)('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];
exports.loginSchema = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Email is not valid'),
    (0, express_validator_1.body)('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];
