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
exports.teaRouter = void 0;
const express_1 = require("express");
const length_id_middleware_1 = require("../middleware/length-id-middleware");
const tea_service_1 = require("../domain/tea-service");
exports.teaRouter = (0, express_1.Router)();
exports.teaRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allTea = yield tea_service_1.teaService.getAllTea();
    return res.status(200).send(allTea);
}));
exports.teaRouter.get('/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teaId = req.params.id;
    if (!teaId)
        return res.sendStatus(404);
    const result = yield tea_service_1.teaService.getTeaById(teaId);
    if (!result)
        return res.sendStatus(404);
    return res.status(200).send(result);
}));
exports.teaRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, size, additives, image } = req.body;
    const createdTea = yield tea_service_1.teaService.createTea(name, description, size, additives, image);
    if (!createdTea)
        return res.sendStatus(400);
    return res.sendStatus(201);
}));
exports.teaRouter.put('/:id', length_id_middleware_1.lengthIdMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teaId = req.params.id;
    if (!teaId)
        return res.sendStatus(404);
    const { name, description, size, additives, image } = req.body;
    const updatedTea = yield tea_service_1.teaService.updateTea(teaId, name, description, size, additives, image);
    if (!updatedTea)
        return res.sendStatus(400);
    return res.sendStatus(200);
}));
