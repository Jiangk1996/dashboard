"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_dotenv_1 = __importDefault(require("./config/config.dotenv"));
const index_1 = __importDefault(require("./app/index"));
index_1.default.listen(config_dotenv_1.default.PORT, () => {
    console.log(`The service starting: http://localhost:${config_dotenv_1.default.PORT}`);
});
