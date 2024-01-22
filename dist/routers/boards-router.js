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
Object.defineProperty(exports, "__esModule", { value: true });
exports.boardsRouter = void 0;
const length_id_middleware_1 = require("../middleware/length-id-middleware");
const express_1 = require("express");
const boards_service_1 = require("../domain/boards-service");
const mongodb_1 = require("mongodb");
exports.boardsRouter = (0, express_1.Router)();
// BOARDS
exports.boardsRouter.get('/boards', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allboards = yield boards_service_1.boardsService.getAllBoards();
    return res.status(200).send(allboards);
}));
exports.boardsRouter.get('/boards/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardsId = req.params.id;
    if (!boardsId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.getBoardById(boardsId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
exports.boardsRouter.post('/boards/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = new mongodb_1.ObjectId();
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.createBoard(boardId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
// TASKS
exports.boardsRouter.get('/tasks/:id/:taskId', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardsId = req.params.id;
    const taskId = req.params.taskId;
    if (!boardsId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.getTaskdById(taskId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
exports.boardsRouter.post('/tasks/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { title, description, order, arrayName } = req.body;
    const taskId = new mongodb_1.ObjectId().toString();
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.createTaskById(title, description, taskId, boardId, order, arrayName);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(taskId);
}));
exports.boardsRouter.post('/tasks-id/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { title, description, taskId, order, arrayName } = req.body;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.createTaskById(title, description, taskId, boardId, order, arrayName);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(taskId);
}));
exports.boardsRouter.delete('/tasks/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskId } = req.body;
    if (!taskId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.deleteTaskById(taskId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(taskId);
}));
exports.boardsRouter.put('/tasks/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { title, description, taskId } = req.body;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.updateTaskById(title, description, taskId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
exports.boardsRouter.delete('/all-tasks/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.deleteAllTasksByBoardId(boardId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
// SUB-ARRAY
exports.boardsRouter.patch('/sub-array/add/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { taskId, arrayName } = req.body;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.addTaskInArrayByIdAndName(taskId, boardId, arrayName);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(taskId);
}));
exports.boardsRouter.patch('/sub-array/remove/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { taskId, arrayName } = req.body;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.removeTaskFromnArrayByIdAndName(taskId, boardId, arrayName);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(boardId);
}));
exports.boardsRouter.delete('/sub-array/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.deleteArrayById(boardId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
exports.boardsRouter.patch('/sub-array/decrease/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { arrayName, order } = req.body;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.decreaseOrderOfRest(boardId, arrayName, order);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
exports.boardsRouter.patch('/sub-array/increase/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const boardId = req.params.id;
    const { arrayName, order } = req.body;
    if (!boardId)
        return res.sendStatus(404);
    const result = yield boards_service_1.boardsService.increaseOrderOfBigger(boardId, arrayName, order);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
