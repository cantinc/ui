import { __rest, __asyncGenerator, __await } from 'tslib';
import { inject, routerContext } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../AsyncSpin/index.es6.js';
import '../Navigation/index.es6.js';
import '../Page/index.es6.js';
import { AsyncSpin } from '../AsyncSpin/AsyncSpin.es6.js';
import { DelayPage } from '../Page/Page.es6.js';
import { Navigation } from '../Navigation/Navigation.es6.js';

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
        const { menu: oldMenu, slot, page, access = true } = navItem, rest = __rest(navItem, ["menu", "slot", "page", "access"]);
        const href = prefix && slot === '/' ? prefix : `${prefix}/${slot === '/' ? '' : slot}`;
        const item = Object.assign(Object.assign({}, rest), { access,
            href });
        const Page = function () {
            return __asyncGenerator(this, arguments, function* () {
                yield yield __await({type:AsyncSpin,props:{flex:true,justify:'center',align:'center',showDelay:300}});
                const _a = yield __await(page()), { default: Component } = _a, props = __rest(_a, ["default"]);
                yield yield __await(({type:DelayPage,children:[inject(access, condition => condition ? ({type:Component,props:{...props}}) : handleAccess === null || handleAccess === void 0 ? void 0 : handleAccess(navItem))]}));
            });
        };
        if (oldMenu) {
            const [newMenu, subpages] = splitPagesItem(oldMenu, href, handleAccess, {
                type: 'slot',
                props: { name: '/' },
                children: [{type:Page}],
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
                children: [{type:Page}],
            });
        }
        menu.push(item);
    }
    return [menu, pages];
}
function Pages({ navigation, prefix = '', handleAccess, }) {
    const children = useChildren();
    const [menu, pages] = splitPagesItem(navigation, prefix, handleAccess);
    const slots = ([{type:'slot',props:{name:'menu'},children:[{type:Navigation,props:{menu:menu}}]},{type:'slot',props:{name:'pages'},children:[pages]}]);
    if (!prefix) {
        return ({type:'slots',props:{from:slots},children:[children]});
    }
    return ({type:'slots',props:{from:slots},children:[{type:'context',props:{for:routerContext,set:(prefix.match(/\//g) || []).length + 1},children:[children]}]});
}

export { Pages, splitPagesItem };
