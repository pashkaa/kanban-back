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
exports.dessertRouter = void 0;
const express_1 = require("express");
const length_id_middleware_1 = require("../middleware/length-id-middleware");
const desert_service_1 = require("../domain/desert-service");
exports.dessertRouter = (0, express_1.Router)();
exports.dessertRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allDessert = yield desert_service_1.dessertService.getAllDessert();
    return res.status(200).send(allDessert);
}));
exports.dessertRouter.get('/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dessertId = req.params.id;
    if (!dessertId)
        return res.sendStatus(404);
    const result = yield desert_service_1.dessertService.getDessertById(dessertId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
exports.dessertRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, size, additives, image } = req.body;
    const createdDessert = yield desert_service_1.dessertService.createDessert(name, description, size, additives, image);
    if (!createdDessert)
        return res.sendStatus(400);
    return res.sendStatus(201);
}));
exports.dessertRouter.put('/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dessertId = req.params.id;
    if (!dessertId)
        return res.sendStatus(404);
    const { name, description, size, additives, image } = req.body;
    const updatedDessert = yield desert_service_1.dessertService.updateDessert(dessertId, name, description, size, additives, image);
    if (!updatedDessert)
        return res.sendStatus(400);
    return res.sendStatus(200);
}));
