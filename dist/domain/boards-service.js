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
exports.boardsService = void 0;
const boards_repository_1 = require("../repositories/boards-repository");
class BoardsService {
    constructor() {
        this.boards = new boards_repository_1.BoardsRepository();
    }
    getAllBoards() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.getAllBoards();
        });
    }
    getBoardById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.getBoardById(id);
        });
    }
    getTaskdById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.getTaskById(taskId);
        });
    }
    createTaskById(title, description, taskId, boardId, order, arrayName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.createTaskById(title, description, taskId, boardId, order, arrayName);
        });
    }
    addTaskInArrayByIdAndName(taskId, boardId, arrayName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.addTaskInArrayByIdAndName(taskId, boardId, arrayName);
        });
    }
    removeTaskFromnArrayByIdAndName(taskId, boardId, arrayName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.removeTaskFromnArrayByIdAndName(taskId, boardId, arrayName);
        });
    }
    deleteTaskById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.deleteTaskById(taskId);
        });
    }
    updateTaskById(title, description, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.updateTaskById(title, description, taskId);
        });
    }
    deleteArrayById(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.deleteArrayById(boardId);
        });
    }
    deleteAllTasksByBoardId(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.deleteAllTasksByBoardId(boardId);
        });
    }
    createBoard(boardId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.createBoard(boardId);
        });
    }
    decreaseOrderOfRest(boardId, arrayName, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.decreaseOrderOfRest(boardId, arrayName, order);
        });
    }
    increaseOrderOfBigger(boardId, arrayName, order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.boards.increaseOrderOfBigger(boardId, arrayName, order);
        });
    }
}
exports.boardsService = new BoardsService();
