'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../external/AsyncSpin/index.js');
require('../Navigation/index.js');
require('../Page/index.js');
var AsyncSpin = require('../../external/AsyncSpin/AsyncSpin.js');
var Page = require('../Page/Page.js');
var Navigation = require('../Navigation/Navigation.js');

function splitPagesItem(navigation, prefix, handleAccess, parent) {
    const menu = [];
    const pages = {
        type: 'router',
        props: {
            ish: true,
        },
        children: parent ? [parent] : [],
    };
    for (let i = 0; i < navigation.length; i++) {
        const navItem = navigation[i];
        const { menu: oldMenu, slot, page, access = true } = navItem, rest = tslib.__rest(navItem, ["menu", "slot", "page", "access"]);
        const href = prefix && slot === '/' ? prefix : `${prefix}/${slot === '/' ? '' : slot}`;
        const item = Object.assign(Object.assign({}, rest), { access,
            href });
        const Page$1 = function () {
            return tslib.__asyncGenerator(this, arguments, function* () {
                yield yield tslib.__await({type:AsyncSpin.AsyncSpin,props:{flex:true,justify:'center',align:'center',show:300}});
                const _a = yield tslib.__await(page()), { default: Component } = _a, props = tslib.__rest(_a, ["default"]);
                yield yield tslib.__await({type:Page.DelayPage,children:[dom.inject(access, condition => condition ? ({type:Component,props:{...props}}) : handleAccess === null || handleAccess === void 0 ? void 0 : handleAccess(navItem))]});
            });
        };
        if (oldMenu) {
            const [newMenu, subpages] = splitPagesItem(oldMenu, href, handleAccess, {
                type: 'slot',
                props: { name: '/' },
                children: [{type:Page$1}],
            });
            item.menu = newMenu;
            pages.children.push({
                type: 'slot',
                props: { name: slot },
                children: [subpages],
            });
        }
        else {
            pages.children.push({
                type: 'slot',
                props: { name: slot },
                children: [{type:Page$1}],
            });
        }
        menu.push(item);
    }
    return [menu, pages];
}
function Pages({ navigation, prefix = '', handleAccess, }) {
    const children = jsx.useChildren();
    const [menu, pages] = splitPagesItem(navigation, prefix, handleAccess);
    const slots = ([{type:'slot',props:{name:'menu'},children:[{type:Navigation.Navigation,props:{menu:menu}}]},{type:'slot',props:{name:'pages'},children:[pages]}]);
    if (!prefix) {
        return ({type:'slots',props:{from:slots},children:[children]});
    }
    return ({type:'slots',props:{from:slots},children:[{type:'context',props:{for:dom.routerContext,set:(prefix.match(/\//g) || []).length + 1},children:[children]}]});
}

exports.Pages = Pages;
exports.splitPagesItem = splitPagesItem;
