import injector_8363bc92 from 'rollup-plugin-styles/dist/runtime/inject-css.js';

var css = "@keyframes Navigation_show__bb5c024b{0%{max-height:0}to{max-height:var(--ui-sub-menu-height)}}.Navigation_root__bb5c024b{display:flex;flex:1;flex-direction:column;font-size:32px;font-style:italic;font-weight:900;text-transform:uppercase}.Navigation_submenu__bb5c024b{--ui-sub-menu-height:fit-content;display:flex;flex-direction:column;font-size:75%;gap:4px;margin-bottom:-8px;margin-top:calc(var(--ui-flex-gap)*-1 + 8px);max-height:0;min-height:0;overflow:hidden;text-transform:none;transition:all .3s;visibility:hidden}.Navigation_link__bb5c024b{text-decoration:none}.Navigation_linkActive__bb5c024b{color:var(--color-link-dark)}.Navigation_linkActive__bb5c024b+.Navigation_submenu__bb5c024b{animation:Navigation_show__bb5c024b .3s;max-height:-moz-fit-content;max-height:fit-content;min-height:var(--ui-sub-menu-height);visibility:visible}";
var modules_a22eb676 = {"root":"Navigation_root__bb5c024b","submenu":"Navigation_submenu__bb5c024b","link":"Navigation_link__bb5c024b","linkActive":"Navigation_linkActive__bb5c024b","show":"Navigation_show__bb5c024b"};
injector_8363bc92(css,{});

export { css, modules_a22eb676 as default };
