"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/User/user.routes");
const auth_routes_1 = require("../modules/Auth/auth.routes");
const Lesson_routes_1 = require("../modules/Lesson/Lesson.routes");
const vocabulary_routes_1 = require("../modules/Vocabulary/vocabulary.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_routes_1.UserRoutes.router,
    },
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes.router,
    },
    {
        path: '/lessons',
        route: Lesson_routes_1.LessonRoutes.router,
    },
    {
        path: '/vocabulary',
        route: vocabulary_routes_1.VocabularyRoutes.router,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
