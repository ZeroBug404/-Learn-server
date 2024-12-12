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
exports.LessonService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiErrors_1 = require("../../../errors/ApiErrors");
const Lesson_model_1 = require("./Lesson.model");
const createLesson = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingLesson = yield Lesson_model_1.Lesson.findOne({
        lessonNumber: payload.lessonNumber,
    });
    if (existingLesson) {
        throw new ApiErrors_1.ApiError(http_status_1.default.BAD_REQUEST, 'Lesson with this number already exists');
    }
    const result = yield Lesson_model_1.Lesson.create(payload);
    return result;
});
const getAllLessons = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_model_1.Lesson.find({});
    return result;
});
const getSingleLesson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_model_1.Lesson.findById(id);
    if (!result) {
        throw new ApiErrors_1.ApiError(http_status_1.default.NOT_FOUND, 'Lesson not found');
    }
    return result;
});
const updateLesson = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_model_1.Lesson.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new ApiErrors_1.ApiError(http_status_1.default.NOT_FOUND, 'Lesson not found');
    }
    return result;
});
const deleteLesson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_model_1.Lesson.findByIdAndDelete(id);
    if (!result) {
        throw new ApiErrors_1.ApiError(http_status_1.default.NOT_FOUND, 'Lesson not found');
    }
    return result;
});
exports.LessonService = {
    createLesson,
    getAllLessons,
    getSingleLesson,
    updateLesson,
    deleteLesson,
};
