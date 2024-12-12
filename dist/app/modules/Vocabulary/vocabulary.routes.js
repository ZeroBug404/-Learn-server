"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VocabularyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const vocabulary_controller_1 = require("./vocabulary.controller");
const router = express_1.default.Router();
// Routes for vocabulary management
router.post('/create', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), vocabulary_controller_1.VocabularyController.createVocabulary);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), vocabulary_controller_1.VocabularyController.getAllVocabularies);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER), vocabulary_controller_1.VocabularyController.getSingleVocabulary);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), vocabulary_controller_1.VocabularyController.updateVocabulary);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), vocabulary_controller_1.VocabularyController.deleteVocabulary);
exports.VocabularyRoutes = {
    router,
};
