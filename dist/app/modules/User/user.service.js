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
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("./user.model");
const ApiErrors_1 = require("../../../errors/ApiErrors");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.User.findOne({ email: payload.email });
    if (userExist) {
        throw new ApiErrors_1.ApiError(http_status_1.default.BAD_REQUEST, 'An applicant already exist to this email and phone Number');
    }
    payload.role = 'user';
    const result = yield user_model_1.User.create(payload);
    return result;
});
//get all users
const getAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find({});
    return result;
});
//get single user
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
const updateSingleUser = (id, paylod) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ _id: id }, paylod, {
        new: true,
    });
    return result;
});
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userExist = yield user_model_1.User.findById(id);
    if (!userExist) {
        throw new ApiErrors_1.ApiError(http_status_1.default.BAD_REQUEST, 'User Not Found and Deletion Unsuccessfull');
    }
    const result = user_model_1.User.findByIdAndDelete(id);
    return result;
});
const userProfile = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user) {
        throw new ApiErrors_1.ApiError(http_status_1.default.UNAUTHORIZED, 'Unauthorized');
    }
    const result = yield user_model_1.User.findOne({ email: user.email });
    return result;
});
const updateUserProfile = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user) {
        throw new ApiErrors_1.ApiError(http_status_1.default.UNAUTHORIZED, 'Unauthorized');
    }
    const result = yield user_model_1.User.findOneAndUpdate({ email: user.email }, payload, {
        new: true,
    });
    return result;
});
exports.UserService = {
    createUser,
    getAllUserService,
    getSingleUser,
    updateUserProfile,
    userProfile,
    updateSingleUser,
    deleteSingleUser,
};
