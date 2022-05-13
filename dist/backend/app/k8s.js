"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.k8sCoreApi = exports.k8sCustomApi = void 0;
const k8s = require("@kubernetes/client-node");
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
exports.k8sCustomApi = kc.makeApiClient(k8s.CustomObjectsApi);
exports.k8sCoreApi = kc.makeApiClient(k8s.CoreV1Api);
exports.client = k8s.KubernetesObjectApi.makeApiClient(kc);
