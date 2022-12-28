;(function () {
  const env = {"CANTINC_UI_VERSION":"0.0.10","CANTINC_UI_BASE_URL":""};
  if (typeof process === 'undefined') {
    globalThis.process = { env: env };
  } else if (process.env) {
    Object.assign(process.env, env);
  } else {
    process.env = env;
  }
})();
