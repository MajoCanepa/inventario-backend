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
exports.UserService = void 0;
const user_1 = require("./entities/user");
const bcrypt_1 = require("../helpers/bcrypt");
class UserService {
    // se define un método create que recibe un usuario y devuelve una promesa de tipo IUser
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.BcryptAdapter.hash(user.password);
            const newUser = new user_1.User(Object.assign(Object.assign({}, user), { password: hashedPassword }));
            return yield newUser.save();
        });
    }
    ;
    // se define un método findAll que devuelve una promesa de tipo IUser[]
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.User.find();
        });
    }
    ;
    // se define un método findOne que recibe un id y devuelve una promesa de tipo IUser
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.User.findOne({ _id: id });
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        });
    }
    ;
    // se define un método findByEmail que recibe un email y devuelve una promesa de tipo IUser
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.User.findOne({ email });
            if (!user)
                throw new Error('User not found');
            return user;
        });
    }
    ;
    // se define un método update que recibe un id y un usuario y devuelve una promesa de tipo void
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield user_1.User.updateOne({ _id: id }, user);
            if (updatedUser.modifiedCount === 0)
                throw new Error('User not found');
        });
    }
    ;
    // se define un método updatePassword que recibe un id y un password y devuelve una promesa de tipo void
    updatePassword(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.BcryptAdapter.hash(password);
            const updatedUser = yield user_1.User.updateOne({ _id: id }, { password: hashedPassword });
            if (updatedUser.modifiedCount === 0)
                throw new Error('User not found');
        });
    }
    ;
    // se define un método changeRole que recibe un id y un role y devuelve una promesa de tipo void
    changeRole(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield user_1.User.updateOne({ _id: id }, { role });
            if (updatedUser.modifiedCount === 0)
                throw new Error('User not found');
        });
    }
    ;
    // se define un método remove que recibe un id y devuelve una promesa de tipo void
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield user_1.User.deleteOne({ _id: id });
            if (deletedUser.deletedCount === 0)
                throw new Error('User not found');
        });
    }
    ;
}
exports.UserService = UserService;
;
