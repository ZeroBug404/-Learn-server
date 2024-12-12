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
exports.LessonController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const responseHandler_1 = __importDefault(require("../../../utils/responseHandler"));
const catchAsync_1 = require("../../../utils/catchAsync");
const Lesson_service_1 = require("./Lesson.service");
const createLesson = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_service_1.LessonService.createLesson(req.body);
    (0, responseHandler_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Lesson created successfully',
        data: result,
    });
}));
const getAllLessons = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_service_1.LessonService.getAllLessons();
    (0, responseHandler_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lessons retrieved successfully',
        data: result,
    });
}));
const getSingleLesson = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_service_1.LessonService.getSingleLesson(req.params.id);
    (0, responseHandler_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lesson retrieved successfully',
        data: result,
    });
}));
const updateLesson = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_service_1.LessonService.updateLesson(req.params.id, req.body);
    (0, responseHandler_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lesson updated successfully',
        data: result,
    });
}));
const deleteLesson = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Lesson_service_1.LessonService.deleteLesson(req.params.id);
    (0, responseHandler_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Lesson deleted successfully',
        data: result,
    });
}));
exports.LessonController = {
    createLesson,
    getAllLessons,
    getSingleLesson,
    updateLesson,
    deleteLesson,
};
