
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/home/home.ts": [
    "chunk-3SVAAI7Q.js",
    "chunk-NZMXGWSI.js",
    "chunk-QAQ6YAHT.js",
    "chunk-UQ2OLEQ3.js"
  ],
  "src/app/login/login.ts": [
    "chunk-HAWT2YFZ.js",
    "chunk-5PDSMY4Y.js",
    "chunk-NZMXGWSI.js"
  ],
  "src/app/register/register.ts": [
    "chunk-R5YATLZO.js",
    "chunk-5PDSMY4Y.js",
    "chunk-NZMXGWSI.js"
  ],
  "src/app/about-us/about-us.ts": [
    "chunk-D2D2XNRM.js"
  ],
  "src/app/articles/articles.ts": [
    "chunk-NB2CRV6M.js",
    "chunk-NZMXGWSI.js"
  ],
  "src/app/add-task/add-task.ts": [
    "chunk-2ITANK4M.js",
    "chunk-NZMXGWSI.js",
    "chunk-UQ2OLEQ3.js"
  ],
  "src/app/progress/progress.ts": [
    "chunk-IW2YRPUA.js",
    "chunk-QAQ6YAHT.js",
    "chunk-UQ2OLEQ3.js"
  ]
},
  assets: {
    'index.csr.html': {size: 24717, hash: '915ddcfeb7be372e9050c835075cfa27f17cb69c67a0f43ee2fa53dedae13c05', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17227, hash: '25f9b3d3d4ad94ec9e2da7295f755c1f04b1bffadd99638f3ba57c898340a355', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OPUTW5UJ.css': {size: 8043, hash: 'i68XcmjPijU', text: () => import('./assets-chunks/styles-OPUTW5UJ_css.mjs').then(m => m.default)}
  },
};
