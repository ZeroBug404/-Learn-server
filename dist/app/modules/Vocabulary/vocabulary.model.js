"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vocabulary = void 0;
const mongoose_1 = require("mongoose");
const VocabularySchema = new mongoose_1.Schema({
    word: {
        type: String,
        required: true,
        trim: true,
    },
    pronunciation: {
        type: String,
        required: true,
        trim: true,
    },
    meaning: {
        type: String,
        required: true,
        trim: true,
    },
    whenToSay: {
        type: String,
        required: true,
        trim: true,
    },
    lessonNumber: {
        type: Number,
        required: true,
        ref: 'Lesson', // References the Lesson model
    },
    adminEmail: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});
exports.Vocabulary = (0, mongoose_1.model)('Vocabulary', VocabularySchema);
