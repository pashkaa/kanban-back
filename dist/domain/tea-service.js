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
exports.teaService = void 0;
const tea_repository_1 = require("../repositories/tea-repository");
class TeaService {
    constructor() {
        this.teaRepository = new tea_repository_1.TeaRepository();
    }
    getAllTea() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.teaRepository.getAllTea();
        });
    }
    getTeaById(teaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.teaRepository.getTeaById(teaId);
        });
    }
    createTea(name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.teaRepository.createTea(name, description, size, additives, image);
        });
    }
    updateTea(teaId, name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.teaRepository.updateTea(teaId, name, description, size, additives, image);
        });
    }
}
exports.teaService = new TeaService();
