"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const boards_router_1 = require("./routers/boards-router");
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
const whitelist = ['http://localhost:3000', 'http://example2.com'];
// ✅ Enable pre-flight requests
exports.app.options('*', (0, cors_1.default)());
const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use(express_1.default.json());
exports.app.use('/api', boards_router_1.boardsRouter);
exports.app.get('/', (req, res) => {
    res.send('Test APP BackEnd is running!');
});
