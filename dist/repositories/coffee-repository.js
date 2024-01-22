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
exports.CoffeeRepository = void 0;
const db_1 = require("./db");
class CoffeeRepository {
    getAllCoffee() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCoffee = yield db_1.client.db(db_1.dataBaseName)
                .collection('boards').aggregate([
                {
                    $lookup: {
                        from: 'tasks', // Имя коллекции, из которой нужно получить данные
                        localField: 'todoSubBoard', // Поле в текущей коллекции
                        foreignField: '_id', // Поле в коллекции tasks
                        as: 'todoSubBoard' // Новое поле, в которое будут помещены данные из tasks
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
            // const coffe = await client.db(dataBaseName)
            //     .collection<any>('boards').find().toArray()
            // const allCoffee = coffe.map(c => {
            //     return {
            //         id: c._id.toString(),
            //         todoSubBoard: c.todoSubBoard,
            //         inProgressSubBoard: c.inProgressSubBoard,
            //         doneSubBoard: c.doneSubBoard,
            //     }
            // })
            return allCoffee;
        });
    }
}
exports.CoffeeRepository = CoffeeRepository;
