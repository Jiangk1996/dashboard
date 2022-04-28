import {
  CoreV1Api,
  CustomObjectsApi,
  KubeConfig,
} from '@kubernetes/client-node';
import fs from 'fs';
import k8s = require('@kubernetes/client-node');

const config: string = fs.readFileSync('./config.yaml', 'utf8');
const kc: KubeConfig = new k8s.KubeConfig();
kc.loadFromString(config);
// kc.loadFromDefault();
export const k8sCustomApi: CustomObjectsApi = kc.makeApiClient(
  k8s.CustomObjectsApi
);

export const k8sCoreApi: CoreV1Api = kc.makeApiClient(k8s.CoreV1Api);

export const client = k8s.KubernetesObjectApi.makeApiClient(kc);
