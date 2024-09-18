"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressValidatorAdapter = void 0;
const express_validator_1 = require("express-validator");
// ExpressValidatorAdapter es una clase que contiene un método estático llamado validate
// el método validate recibe una petición, una respuesta y una función next
// verifica si hay errores en la validación de la petición
// si hay errores devuelve un status 400 con los errores
// si no hay errores llama a la función next
class ExpressValidatorAdapter {
}
exports.ExpressValidatorAdapter = ExpressValidatorAdapter;
ExpressValidatorAdapter.validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
;
