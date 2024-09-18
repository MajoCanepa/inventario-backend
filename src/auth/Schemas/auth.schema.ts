import { body } from 'express-validator';

export const registerSchema = [
    body('email').isEmail().withMessage('Email no es válido'),
    body('password').isLength({ min: 5 }).withMessage('Contraseña debe tener al menos 5 caracteres'),
    body('role').isIn(['admin', 'user']).withMessage('Rol no es válido'),
];

export const loginSchema = [
    body('email').isEmail().withMessage('Email no es válido'),
    body('password').isLength({ min: 5 }).withMessage('Contraseña debe tener al menos 5 caracteres'),
];



