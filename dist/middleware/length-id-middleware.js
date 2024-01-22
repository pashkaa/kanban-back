"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthIdMiddleware = void 0;
const lengthIdMiddleware = (req, res, next) => {
    const id = req.params.id;
    if (id.length !== 24)
        return res.sendStatus(404);
    return next();
};
exports.lengthIdMiddleware = lengthIdMiddleware;
