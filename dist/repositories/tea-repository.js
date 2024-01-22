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
exports.TeaRepository = void 0;
const db_1 = require("./db");
const mongodb_1 = require("mongodb");
class TeaRepository {
    getAllTea() {
        return __awaiter(this, void 0, void 0, function* () {
            const tea = yield db_1.client.db(db_1.dataBaseName)
                .collection('tea').find().toArray();
            const allTea = tea.map(t => {
                return {
                    id: t._id.toString(),
                    name: t.name,
                    description: t.description,
                    size: t.size,
                    additives: t.additives,
                    image: t.image
                };
            });
            return allTea;
        });
    }
    getTeaById(teaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tea = yield db_1.client.db(db_1.dataBaseName)
                .collection('tea').findOne({ _id: new mongodb_1.ObjectId(teaId) });
            if (!tea)
                return null;
            return {
                id: tea._id.toString(),
                name: tea.name,
                description: tea.description,
                size: tea.size,
                additives: tea.additives,
                image: tea.image
            };
        });
    }
    createTea(name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.client.db(db_1.dataBaseName)
                .collection('tea')
                .insertOne({ _id: new mongodb_1.ObjectId(), name, description, size, additives, image });
            return result.acknowledged;
        });
    }
    updateTea(teaId, name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.client.db(db_1.dataBaseName)
                .collection('tea')
                .updateOne({ _id: new mongodb_1.ObjectId(teaId) }, { $set: { name, description, size, additives, image } });
            return result.acknowledged;
        });
    }
}
exports.TeaRepository = TeaRepository;
