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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ApiErrors_1 = require("../../errors/ApiErrors");
const configs_1 = __importDefault(require("../../configs"));
const auth = (...roles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get authorization token
        const token = req.headers.authorization;
        if (!token) {
            throw new ApiErrors_1.ApiError(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
        }
        //verify token
        let verifiedUser = null;
        try {
            verifiedUser = jsonwebtoken_1.default.verify(token, configs_1.default.jwt.secret);
        }
        catch (error) {
            throw new ApiErrors_1.ApiError(http_status_1.default.FORBIDDEN, 'Invalid Token');
        }
        req.user = verifiedUser;
        if (roles.length && !roles.includes(verifiedUser.role)) {
            throw new ApiErrors_1.ApiError(http_status_1.default.FORBIDDEN, 'Forbidden');
        }
        console.log('verifiedUser', verifiedUser);
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = auth;
