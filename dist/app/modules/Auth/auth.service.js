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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ApiErrors_1 = require("../../../errors/ApiErrors");
const user_model_1 = require("../User/user.model");
const configs_1 = __importDefault(require("../../../configs"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email: emailId, password } = payload;
    // check user exist
    const isUserExists = yield user_model_1.User.isUserExists(emailId);
    if (!isUserExists) {
        throw new ApiErrors_1.ApiError(http_status_1.default.BAD_REQUEST, 'User does not exist');
    }
    //matched password
    if ((isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.password) &&
        !(yield user_model_1.User.isPasswordMatched(password, isUserExists === null || isUserExists === void 0 ? void 0 : isUserExists.password))) {
        throw new ApiErrors_1.ApiError(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    const { role, email } = isUserExists;
    // create access token
    const accessToken = jsonwebtoken_1.default.sign({
        email: isUserExists.email,
        role: isUserExists.role,
    }, configs_1.default.jwt.secret, {
        expiresIn: configs_1.default.jwt.secret_expire_in,
    });
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ email, role }, configs_1.default.jwt.refresh_secret, configs_1.default.jwt.refresh_secret_expire_in);
    return {
        accessToken,
        refreshToken,
        emailId,
        role,
    };
});
const refreshTokenService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(token, configs_1.default.jwt.refresh_secret);
    }
    catch (error) {
        throw new ApiErrors_1.ApiError(http_status_1.default.FORBIDDEN, 'Invalid Refresh Token');
    }
    //checking deleted user refresh token
    const { phoneNumber } = verifiedToken;
    const isUserExists = yield user_model_1.User.isUserExists(phoneNumber);
    if (!isUserExists) {
        throw new ApiErrors_1.ApiError(http_status_1.default.BAD_REQUEST, 'User does not exist');
    }
    //generate new token
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        id: isUserExists.phoneNumber,
        role: isUserExists.role,
    }, configs_1.default.jwt.secret, configs_1.default.jwt.secret_expire_in);
    return {
        accessToken: newAccessToken,
    };
});
exports.AuthService = {
    loginUser,
    refreshTokenService,
};
