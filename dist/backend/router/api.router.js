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
    try {
        await k8s_1.client.create(spec);
        ctx.body = {
            code: 200,
        };
    }
    catch (e) {
        ctx.app.emit('error', e.body, ctx);
    }
});
router.post('/edit', async (ctx) => {
    const spec = ctx.request.body;
    try {
        // add patch request header
        const options = {
            headers: { 'Content-type': 'application/merge-patch+json' },
        };
        await k8s_1.client.patch(spec, undefined, undefined, undefined, undefined, options);
        ctx.body = {
            code: 200,
        };
    }
    catch (e) {
        ctx.app.emit('error', e.body, ctx);
    }
});
router.post('/delete', async (ctx) => {
    const spec = ctx.request.body;
    try {
        await k8s_1.client.delete(spec);
        ctx.body = {
            code: 200,
        };
    }
    catch (e) {
        ctx.app.emit('error', e.body, ctx);
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
