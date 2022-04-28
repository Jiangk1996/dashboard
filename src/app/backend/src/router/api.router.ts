import { K8sApiResponse } from './../type';
import { client, k8sCoreApi, k8sCustomApi } from './../app/k8s';
import Router from '@koa/router';
import { Context } from 'koa';
import { KubernetesObject } from '@kubernetes/client-node';
import k8s = require('@kubernetes/client-node');
const router: Router = new Router({ prefix: '/api/kubediag' });

router.get('/list', async (ctx: Context) => {
  const { type } = ctx.request.query;
  const res: K8sApiResponse = await k8sCustomApi.listClusterCustomObject(
    'diagnosis.kubediag.org',
    'v1',
    type as string
  );
  ctx.body = res.body;
});

router.post('/create', async (ctx: Context) => {
  const spec = ctx.request.body as object;
  // const created = [];
  try {
    // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
    // block.
    // await client.read(spec);
    // we got the resource, so it exists, so patch it
    // const response = await client.patch(spec);
    // created.push(response.body);
    await client.create(spec);
    ctx.body = {
      code: 200,
    };
  } catch (e) {
    // we did not get the resource, so it does not exist, so create it
    // const response = await client.create(spec);
    // created.push(response.body);
    ctx.app.emit('error', (e as Record<string, object>).body, ctx);
  }
});

router.post('/edit', async (ctx: Context) => {
  const spec: KubernetesObject = ctx.request.body as KubernetesObject;
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
    await client.patch(
      spec,
      undefined,
      undefined,
      undefined,
      undefined,
      options
    );

    ctx.body = {
      code: 200,
    };
  } catch (e) {
    // we did not get the resource, so it does not exist, so create it
    // console.log((e as Record<string, Record<string, string>>).body.message);
    ctx.app.emit('error', (e as Record<string, object>).body, ctx);
  }
});

router.post('/delete', async (ctx: Context) => {
  const spec = ctx.request.body as object;
  try {
    // try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
    // block.
    // await client.read(spec);
    // we got the resource, so it exists, so patch it
    await client.delete(spec);
    ctx.body = {
      code: 200,
    };
  } catch (e) {
    ctx.app.emit(
      'error',
      {
        code: 0,
        message: (e as Record<string, Record<string, string>>).body.message,
      },
      ctx
    );
    // we did not get the resource, so it does not exist, so create it
    // const response = await client.create(spec);
    // created.push(response.body);
  }
});

router.get('/getNamespaceList', async (ctx: Context) => {
  const res = await k8sCoreApi.listNamespace();
  ctx.body = res.body;
});

router.get('/getNodeList', async (ctx: Context) => {
  const res = await k8sCoreApi.listNode();
  ctx.body = res.body;
});

router.get('/getPodList', async (ctx: Context) => {
  const { namespace } = ctx.request.query;
  const res = await k8sCoreApi.listNamespacedPod(namespace as string);
  ctx.body = res.body;
});
export default router;
