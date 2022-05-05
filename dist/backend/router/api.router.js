"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const k8s_1 = require("./../app/k8s");
const router_1 = __importDefault(require("@koa/router"));
const router = new router_1.default({ prefix: '/api/kubediag' });
router.get('/list', async (ctx) => {
    const { type } = ctx.request.query;
    const res = await k8s_1.k8sCustomApi.listClusterCustomObject('diagnosis.kubediag.org', 'v1', type);
    ctx.body = res.body;
});
router.post('/create', async (ctx) => {
    const spec = ctx.request.body;
    // const created = [];
    try {
        // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
        // block.
        // await client.read(spec);
        // we got the resource, so it exists, so patch it
        // const response = await client.patch(spec);
        // created.push(response.body);
        await k8s_1.client.create(spec);
        ctx.body = {
            code: 200,
        };
    }
    catch (e) {
        // we did not get the resource, so it does not exist, so create it
        // const response = await client.create(spec);
        // created.push(response.body);
        ctx.app.emit('error', e.body, ctx);
    }
});
router.post('/edit', async (ctx) => {
    const spec = ctx.request.body;
    // spec.metadata = spec.metadata || {};
    // spec.metadata.annotations = spec.metadata.annotations || {};
    // delete spec.metadata.annotations[
    //   "kubectl.kubernetes.io/last-applied-configuration"
    // ];
    // spec.metadata.annotations[
    //   "kubectl.kubernetes.io/last-applied-configuration"
    // ] = JSON.stringify(spec);
    try {
        // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
        // block.
        // await client.read(spec);
        // // we got the resource, so it exists, so patch it
        // const options = {
        //   headers: { "Content-type": k8s.PatchUtils.PATCH_FORMAT_JSON_PATCH },
        // };
        const options = {
            headers: { 'Content-type': 'application/merge-patch+json' },
        };
        // await k8sCustomApi.patchNamespacedCustomObject(
        //   "diagnosis.kubediag.org",
        //   "v1",
        //   "cert-manager",
        //   "diagnoses",
        //   "test-diag",
        //   spec,
        //   undefined,
        //   undefined,
        //   undefined,
        //   options
        // );
        await k8s_1.client.patch(spec, undefined, undefined, undefined, undefined, options);
        ctx.body = {
            code: 200,
        };
    }
    catch (e) {
        // we did not get the resource, so it does not exist, so create it
        // console.log((e as Record<string, Record<string, string>>).body.message);
        ctx.app.emit('error', e.body, ctx);
    }
});
router.post('/delete', async (ctx) => {
    const spec = ctx.request.body;
    try {
        // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
        // block.
        // await client.read(spec);
        // we got the resource, so it exists, so patch it
        await k8s_1.client.delete(spec);
        ctx.body = {
            code: 200,
        };
    }
    catch (e) {
        ctx.app.emit('error', {
            code: 0,
            message: e.body.message,
        }, ctx);
        // we did not get the resource, so it does not exist, so create it
        // const response = await client.create(spec);
        // created.push(response.body);
    }
});
router.get('/getNamespaceList', async (ctx) => {
    const res = await k8s_1.k8sCoreApi.listNamespace();
    ctx.body = res.body;
});
router.get('/getNodeList', async (ctx) => {
    const res = await k8s_1.k8sCoreApi.listNode();
    ctx.body = res.body;
});
router.get('/getPodList', async (ctx) => {
    const { namespace } = ctx.request.query;
    const res = await k8s_1.k8sCoreApi.listNamespacedPod(namespace);
    ctx.body = res.body;
});
exports.default = router;
//# sourceMappingURL=api.router.js.map