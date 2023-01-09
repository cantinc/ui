import injector_8363bc92 from 'rollup-plugin-styles/dist/runtime/inject-css.js';

var css = "@keyframes Navigation_show__397b2757{0%{max-height:0}to{max-height:var(--ui-sub-menu-height)}}.Navigation_root__397b2757{display:flex;flex:1;flex-direction:column;font-size:32px;font-style:italic;font-weight:700}.Navigation_submenu__397b2757{--ui-sub-menu-height:fit-content;display:flex;flex-direction:column;font-size:75%;gap:4px;margin-bottom:-8px;margin-top:calc(var(--ui-flex-gap)*-1 + 8px);max-height:0;min-height:0;overflow:hidden;transition:all .3s;visibility:hidden}.Navigation_link__397b2757{text-decoration:none}.Navigation_linkActive__397b2757{color:var(--color-link-dark)}.Navigation_linkActive__397b2757+.Navigation_submenu__397b2757{animation:Navigation_show__397b2757 .3s;max-height:-moz-fit-content;max-height:fit-content;min-height:var(--ui-sub-menu-height);visibility:visible}";
var modules_a22eb676 = {"root":"Navigation_root__397b2757","submenu":"Navigation_submenu__397b2757","link":"Navigation_link__397b2757","linkActive":"Navigation_linkActive__397b2757","show":"Navigation_show__397b2757"};
injector_8363bc92(css,{});

export { css, modules_a22eb676 as default };
