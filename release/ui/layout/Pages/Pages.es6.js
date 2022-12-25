import { __rest, __asyncGenerator, __await } from 'tslib';
import { routerContext } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../../external/AsyncSpin/index.es6.js';
import '../Navigation/index.es6.js';
import '../Page/index.es6.js';
import { AsyncSpin } from '../../external/AsyncSpin/AsyncSpin.es6.js';
import { DelayPage } from '../Page/Page.es6.js';
import { Navigation } from '../Navigation/Navigation.es6.js';

function splitPagesItem(navigation, prefix, parent) {
    const menu = [];
    const pages = {
        type: 'router',
        props: {
            ish: true,
        },
        children: parent ? [parent] : [],
    };
    for (let i = 0; i < navigation.length; i++) {
        const _a = navigation[i], { menu: oldMenu, slot, page } = _a, rest = __rest(_a, ["menu", "slot", "page"]);
        const href = prefix && slot === '/' ? prefix : `${prefix}/${slot === '/' ? '' : slot}`;
        const item = Object.assign(Object.assign({}, rest), { href });
        const Page = function () {
            return __asyncGenerator(this, arguments, function* () {
                yield yield __await({type:AsyncSpin,props:{flex:true,justify:'center',align:'center',show:300}});
                const { default: Component } = yield __await(page());
                yield yield __await({type:DelayPage,children:[{type:Component}]});
            });
        };
        if (oldMenu) {
            const [newMenu, subpages] = splitPagesItem(oldMenu, href, {
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
function Pages({ navigation, prefix = '', }) {
    const children = useChildren();
    const [menu, pages] = splitPagesItem(navigation, prefix);
    const slots = ([{type:'slot',props:{name:'menu'},children:[{type:Navigation,props:{menu:menu}}]},{type:'slot',props:{name:'pages'},children:[pages]}]);
    if (!prefix) {
        return ({type:'slots',props:{from:slots},children:[children]});
    }
    return ({type:'slots',props:{from:slots},children:[{type:'context',props:{for:routerContext,set:(prefix.match(/\//g) || []).length + 1},children:[children]}]});
}

export { Pages, splitPagesItem };
