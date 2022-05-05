"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const api_router_1 = __importDefault(require("./../router/api.router"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const app = new koa_1.default();
app
    .use((0, koa2_cors_1.default)())
    .use((0, koa_bodyparser_1.default)())
    .use(api_router_1.default.routes())
    .use(api_router_1.default.allowedMethods());
app.on('error', (err, ctx) => {
    const status = 500;
    ctx.status = status;
    console.log(err);
    ctx.body = err;
});
exports.default = app;
//# sourceMappingURL=index.js.map