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
exports.VocabularyService = void 0;
const vocabulary_model_1 = require("./vocabulary.model");
const ApiErrors_1 = require("../../../errors/ApiErrors");
const http_status_1 = __importDefault(require("http-status"));
const createVocabulary = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.create(payload);
    return result;
});
const getAllVocabularies = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.find({});
    return result;
});
const getSingleVocabulary = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.findById(id);
    if (!result) {
        throw new ApiErrors_1.ApiError(http_status_1.default.NOT_FOUND, 'Vocabulary not found');
    }
    return result;
});
const updateVocabulary = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new ApiErrors_1.ApiError(http_status_1.default.NOT_FOUND, 'Vocabulary not found');
    }
    return result;
});
const deleteVocabulary = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield vocabulary_model_1.Vocabulary.findByIdAndDelete(id);
    if (!result) {
        throw new ApiErrors_1.ApiError(http_status_1.default.NOT_FOUND, 'Vocabulary not found');
    }
    return result;
});
exports.VocabularyService = {
    createVocabulary,
    getAllVocabularies,
    getSingleVocabulary,
    updateVocabulary,
    deleteVocabulary,
};
