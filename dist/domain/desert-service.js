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
exports.dessertService = void 0;
const dessert_repository_1 = require("../repositories/dessert-repository");
class DessertService {
    constructor() {
        this.dessertRepository = new dessert_repository_1.DessertRepository();
    }
    getAllDessert() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dessertRepository.getAllDessert();
        });
    }
    getDessertById(dessertId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dessertRepository.getDessertById(dessertId);
        });
    }
    createDessert(name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dessertRepository.createDessert(name, description, size, additives, image);
        });
    }
    updateDessert(dessertId, name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dessertRepository.updateDessert(dessertId, name, description, size, additives, image);
        });
    }
}
exports.dessertService = new DessertService();
