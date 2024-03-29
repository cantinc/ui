'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Modal_root__974e84d0{background:var(--color-100);cursor:auto;display:flex;flex-direction:column;font-size:16px;height:var(--ui-modal-height);left:50%;max-height:calc(100% - 20px);max-width:var(--ui-modal-width,620px);opacity:0;overscroll-behavior:none;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotateX(20deg) scale(.7);transition:all .3s,opacity .2s;visibility:hidden;width:calc(100% - 20px)}.Modal_root__974e84d0:last-child{transform:translateX(-50%) translateY(-50%) rotateX(-10deg) scale(1.3)}.Modal_root__974e84d0:last-child.Modal_show__974e84d0{opacity:1;transform:translateX(-50%) translateY(-50%) rotateX(0) scale(1);visibility:visible}@media (min-width:767px){.Modal_root__974e84d0{border-radius:var(--round-60)}}@media (max-width:767px){.Modal_root__974e84d0{height:var(--window-height);max-height:100vh;max-width:100vw;min-width:100vw}}.Modal_hide__974e84d0{opacity:0!important;transform:translateX(-50%) translateY(-50%) rotateX(-10deg) scale(1.3)!important;visibility:hidden!important}.Modal_noTitle__974e84d0 .Modal_header__974e84d0{left:0;position:absolute;right:0;top:0}.Modal_content__974e84d0{display:flex;flex:1;flex-direction:column;margin:24px 4px;overflow:auto;padding:0 20px}.Modal_root__974e84d0:not(.Modal_noTitle__974e84d0) .Modal_header__974e84d0~.Modal_content__974e84d0{margin-top:0}.Modal_header__974e84d0{box-sizing:content-box;color:var(--color-primary-50);font-size:24px;font-style:italic;font-weight:900;line-height:100%;min-height:1em;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;z-index:1}.Modal_subTitle__974e84d0{color:var(--color-40);font-size:16px;font-style:normal;font-weight:400;text-transform:none}.Modal_headButtons__974e84d0{display:flex;gap:24px;margin-left:auto}.Modal_headButton__974e84d0{align-items:center;background:none;border:none;color:var(--color-10);cursor:pointer;display:flex;font-size:22px;min-width:24px;outline:none;padding:0;transition:all .3s}@media (pointer:fine){.Modal_headButton__974e84d0[data-button=close]:hover,.Modal_headButton__974e84d0[data-button=delete]:hover,.Modal_headButton__974e84d0[data-button=remove]:hover{background:none;color:var(--color-negative-50)}.Modal_headButton__974e84d0:hover{background:none;color:var(--color-secondary-50)}}.tab .Modal_headButton__974e84d0:focus{color:var(--color-warning-50)}";
var modules_8f0e29bb = {"root":"Modal_root__974e84d0","show":"Modal_show__974e84d0","hide":"Modal_hide__974e84d0","noTitle":"Modal_noTitle__974e84d0","header":"Modal_header__974e84d0","content":"Modal_content__974e84d0","subTitle":"Modal_subTitle__974e84d0","headButtons":"Modal_headButtons__974e84d0","headButton":"Modal_headButton__974e84d0"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_8f0e29bb;
