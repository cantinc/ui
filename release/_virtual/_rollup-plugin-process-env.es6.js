;(function () {
  const env = {"CANTINC_UI_VERSION":"0.4.0-alpha.1","CANTINC_UI_BASE_URL":"/ui"};
  if (typeof process === 'undefined') {
    globalThis.process = { env: env };
  } else if (process.env) {
    Object.assign(process.env, env);
  } else {
    process.env = env;
  }
})();
