"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
const mongoose_1 = require("mongoose");
const LessonSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    lessonNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    vocabularyCount: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.Lesson = (0, mongoose_1.model)('Lesson', LessonSchema);
