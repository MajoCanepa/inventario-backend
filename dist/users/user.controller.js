"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.handleError = (error, res) => {
            if (error.code === 11000) {
                return res.status(400).json({ error: 'User already exists' });
            }
            return res.status(500).json({ error: 'Internal Server Error' });
        };
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.create(req.body);
                res.status(201).json(user);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.findAll();
                res.status(200).json(users);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.findOne(req.params.id);
                res.status(200).json(user);
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userService.update(req.params.id, req.body);
                res.status(204).end();
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
        this.remove = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userService.remove(req.params.id);
                res.status(204).end();
            }
            catch (error) {
                this.handleError(error, res);
            }
        });
    }
}
exports.UserController = UserController;
