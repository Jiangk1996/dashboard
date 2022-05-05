"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.k8sCoreApi = exports.k8sCustomApi = void 0;
const fs_1 = __importDefault(require("fs"));
const k8s = require("@kubernetes/client-node");
const config = fs_1.default.readFileSync('./config.yaml', 'utf8');
const kc = new k8s.KubeConfig();
kc.loadFromString(config);
// kc.loadFromDefault();
exports.k8sCustomApi = kc.makeApiClient(k8s.CustomObjectsApi);
exports.k8sCoreApi = kc.makeApiClient(k8s.CoreV1Api);
exports.client = k8s.KubernetesObjectApi.makeApiClient(kc);
//# sourceMappingURL=k8s.js.map