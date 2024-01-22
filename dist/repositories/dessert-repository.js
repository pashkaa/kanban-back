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
exports.DessertRepository = void 0;
const db_1 = require("./db");
const mongodb_1 = require("mongodb");
class DessertRepository {
    getAllDessert() {
        return __awaiter(this, void 0, void 0, function* () {
            const dessert = yield db_1.client.db(db_1.dataBaseName)
                .collection('dessert').find().toArray();
            const allDessert = dessert.map(d => {
                return {
                    id: d._id.toString(),
                    name: d.name,
                    description: d.description,
                    size: d.size,
                    additives: d.additives,
                    image: d.image
                };
            });
            return allDessert;
        });
    }
    getDessertById(dessertId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dessert = yield db_1.client.db(db_1.dataBaseName)
                .collection('dessert').findOne({ _id: new mongodb_1.ObjectId(dessertId) });
            if (!dessert)
                return null;
            return {
                id: dessert._id.toString(),
                name: dessert.name,
                description: dessert.description,
                size: dessert.size,
                additives: dessert.additives,
                image: dessert.image
            };
        });
    }
    createDessert(name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.client.db(db_1.dataBaseName)
                .collection('dessert')
                .insertOne({ _id: new mongodb_1.ObjectId(), name, description, size, additives, image });
            return result.acknowledged;
        });
    }
    updateDessert(dessertId, name, description, size, additives, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.client.db(db_1.dataBaseName)
                .collection('dessert')
                .updateOne({ _id: new mongodb_1.ObjectId(dessertId) }, { $set: { name, description, size, additives, image } });
            return result.acknowledged;
        });
    }
}
exports.DessertRepository = DessertRepository;
