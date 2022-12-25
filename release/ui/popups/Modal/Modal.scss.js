'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Modal_root__35342318{--ui-modal-width:602px;background:var(--color-100);cursor:auto;display:flex;flex-direction:column;font-size:16px;left:50%;max-height:calc(100% - 20px);max-width:var(--ui-modal-width);opacity:0;overscroll-behavior:none;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotateX(20deg) scale(.7);transition:all .3s,opacity .2s;visibility:hidden;width:calc(100% - 20px)}.Modal_root__35342318:last-child{transform:translateX(-50%) translateY(-50%) rotateX(-10deg) scale(1.3)}.Modal_root__35342318:last-child.Modal_show__35342318{opacity:1;transform:translateX(-50%) translateY(-50%) rotateX(0) scale(1);visibility:visible}@media (min-width:767px){.Modal_root__35342318{border-radius:10px}}@media (max-width:767px){.Modal_root__35342318{height:100vh;height:-webkit-fill-available;max-height:100vh;max-width:100vw;min-width:100vw}}.Modal_hide__35342318{opacity:0!important;transform:translateX(-50%) translateY(-50%) rotateX(-10deg) scale(1.3)!important;visibility:hidden!important}.Modal_content__35342318{display:flex;flex:1;flex-direction:column;margin:38px 4px;overflow:auto;padding:0 38px}.Modal_header__35342318~.Modal_content__35342318{margin-top:0}.Modal_subTitle__35342318{color:var(--color-40);font-size:18px;font-weight:400}.Modal_header__35342318{box-sizing:content-box;font-size:32px;font-weight:700;min-height:1em;overflow:hidden;padding:38px;text-overflow:ellipsis;white-space:nowrap;z-index:1}.Modal_headButtons__35342318{display:flex;gap:24px;position:absolute;right:16px;top:0;z-index:1}.Modal_headButton__35342318{background:none;border:none;color:var(--color-10);cursor:pointer;display:flex;font-size:22px;outline:none;padding:16px 0;transition:all .3s}.Modal_headButton__35342318[data-button=close]:focus,.Modal_headButton__35342318[data-button=close]:hover,.Modal_headButton__35342318[data-button=delete]:focus,.Modal_headButton__35342318[data-button=delete]:hover,.Modal_headButton__35342318[data-button=remove]:focus,.Modal_headButton__35342318[data-button=remove]:hover{background:none;color:var(--color-red)}.Modal_headButton__35342318:focus,.Modal_headButton__35342318:hover{background:none;color:var(--color-link-dark)}";
var modules_8f0e29bb = {"root":"Modal_root__35342318","show":"Modal_show__35342318","hide":"Modal_hide__35342318","content":"Modal_content__35342318","header":"Modal_header__35342318","subTitle":"Modal_subTitle__35342318","headButtons":"Modal_headButtons__35342318","headButton":"Modal_headButton__35342318"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_8f0e29bb;
