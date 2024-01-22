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
exports.BoardsRepository = void 0;
const db_1 = require("./db");
const mongodb_1 = require("mongodb");
class BoardsRepository {
    getTaskById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').findOne({ _id: new mongodb_1.ObjectId(taskId) });
            return allboards;
        });
    }
    createTaskById(title, description, taskId, boardId, order, arrayName) {
        return __awaiter(this, void 0, void 0, function* () {
            // http://localhost:3005/boards/tasks/:id
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').insertOne({ _id: new mongodb_1.ObjectId(taskId), title: title, description: description, boardId: boardId, order: order, arrayName: arrayName });
            return allboards;
        });
    }
    addTaskInArrayByIdAndName(taskId, boardId, arrayName) {
        return __awaiter(this, void 0, void 0, function* () {
            // http://localhost:3005/boards/add/:id
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').updateOne({ _id: new mongodb_1.ObjectId(boardId) }, {
                $push: {
                    [arrayName]: new mongodb_1.ObjectId(taskId)
                }
            });
            return allboards;
        });
    }
    removeTaskFromnArrayByIdAndName(taskId, boardId, arrayName) {
        return __awaiter(this, void 0, void 0, function* () {
            // http://localhost:3005/boards/remove/:id
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').updateOne({ _id: new mongodb_1.ObjectId(boardId) }, {
                $pull: {
                    [arrayName]: new mongodb_1.ObjectId(taskId)
                }
            });
            return allboards;
        });
    }
    deleteTaskById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            // http://localhost:3005/boards/tasks
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').deleteOne({ _id: new mongodb_1.ObjectId(taskId) });
            return allboards;
        });
    }
    updateTaskById(title, description, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').updateOne({ _id: new mongodb_1.ObjectId(taskId) }, {
                $set: {
                    title: title,
                    description: description
                }
            });
            return allboards;
        });
    }
    getAllBoards() {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').aggregate([
                {
                    $lookup: {
                        from: 'tasks',
                        localField: 'todoSubBoard',
                        foreignField: '_id',
                        as: 'todoSubBoard'
                    }
                },
                {
                    $lookup: {
                        from: 'tasks',
                        localField: 'inProgressSubBoard',
                        foreignField: '_id',
                        as: 'inProgressSubBoard'
                    }
                },
                {
                    $lookup: {
                        from: 'tasks',
                        localField: 'doneSubBoard',
                        foreignField: '_id',
                        as: 'doneSubBoard'
                    }
                }
            ]).toArray();
            return allboards;
        });
    }
    getBoardById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').aggregate([
                {
                    $match: { _id: new mongodb_1.ObjectId(id) }
                },
                {
                    $lookup: {
                        from: 'tasks',
                        localField: 'todoSubBoard',
                        foreignField: '_id',
                        as: 'todoSubBoard'
                    }
                },
                {
                    $lookup: {
                        from: 'tasks',
                        localField: 'inProgressSubBoard',
                        foreignField: '_id',
                        as: 'inProgressSubBoard'
                    }
                },
                {
                    $lookup: {
                        from: 'tasks',
                        localField: 'doneSubBoard',
                        foreignField: '_id',
                        as: 'doneSubBoard'
                    }
                }
            ]).toArray();
            return allboards;
        });
    }
    createTaskInBoardById(id, newId, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').insertOne({
                _id: newId,
                title: title,
                description: description,
                boardId: new mongodb_1.ObjectId(id)
            });
            return allboards;
        });
    }
    addTaskInBoardById(id, newId, boardName) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').updateOne({ _id: new mongodb_1.ObjectId(id) }, {
                $push: {
                    [boardName]: new mongodb_1.ObjectId(newId)
                }
            });
            return allboards;
        });
    }
    updateTaskInBoardById(id, taskId, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').updateOne({ _id: new mongodb_1.ObjectId(taskId) }, {
                $set: {
                    title: title,
                    description: description
                }
            });
            return allboards;
        });
    }
    deleteTaskInBoardById(id, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').deleteOne({ _id: new mongodb_1.ObjectId(taskId) });
            return allboards;
        });
    }
    updateTaskArrayInBoardById(id, taskId, title, description, boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').deleteOne({ _id: new mongodb_1.ObjectId(taskId) });
            return allboards;
        });
    }
    deleteTaskFromArrayInBoardById(id, taskId, title, description, boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').updateOne({ _id: new mongodb_1.ObjectId(boardId) }, { $pull: { todoSubBoard: new mongodb_1.ObjectId(taskId) } });
            return allboards;
        });
    }
    createTaskWithId(id, title, description, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').updateOne({ _id: new mongodb_1.ObjectId(taskId) }, {
                $set: {
                    title: title,
                    description: description
                }
            });
            return allboards;
        });
    }
    deleteArrayById(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').deleteOne({ _id: new mongodb_1.ObjectId(boardId) });
            return allboards;
        });
    }
    deleteAllTasksByBoardId(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').deleteMany({ boardId: boardId });
            return allboards;
        });
    }
    createBoard(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').insertOne({ _id: boardId, todoSubBoard: [], inProgressSubBoard: [], doneSubBoard: [] });
            return allboards;
        });
    }
    decreaseOrderOfRest(boardId, arrayName, order) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(123);
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').updateMany({ boardId: boardId, arrayName: arrayName, order: { $gt: order } }, { $inc: { order: -1 } });
            return allboards;
        });
    }
    increaseOrderOfBigger(boardId, arrayName, order) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(123);
            const allboards = yield db_1.client.db(db_1.dataBaseName)
                .collection('tasks').updateMany({ boardId: boardId, arrayName: arrayName, order: { $gte: order } }, { $inc: { order: +1 } });
            return allboards;
        });
    }
}
exports.BoardsRepository = BoardsRepository;
