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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDb = exports.dataBaseName = exports.client = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoUri = process.env.MONGO_URL || 'mongodb+srv://pavlo:pavlo123@cluster0.ikieo.mongodb.net/';
console.log(process.env.MONGO_URL);
exports.client = new mongodb_1.MongoClient(mongoUri);
exports.dataBaseName = 'test';
function runDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server
            yield exports.client.connect();
            // Establish and verufy connection
            yield exports.client.db(exports.dataBaseName).command({ ping: 1 });
            console.log('Connected successfully to mongo server');
        }
        catch (_a) {
            console.log('Can`t connect to db');
            // Ensures that the client will close when you finish/error
            yield exports.client.close();
        }
    });
}
exports.runDb = runDb;
