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
exports.logout = exports.login = exports.signup = void 0;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { firstName, lastName, email, userName, password } = req.body;
        // console.log("mariem");
    }
    catch (error) {
        console.log(error);
    }
    return;
});
exports.signup = signup;
const login = () => {
    console.log("login");
};
exports.login = login;
const logout = () => {
    console.log("logout");
};
exports.logout = logout;
