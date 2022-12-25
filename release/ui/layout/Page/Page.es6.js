import { __rest } from 'tslib';
import { useShow, useHidden, history } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import { scrollTo } from '@watch-state/history-api';
import classes from 'html-classes';
import { onDestroy } from 'watch-state';
import '../Flex/index.es6.js';
import modules_1f74907c from './Page.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

function DelayPage(_a = {}) {
    var { show = 300, hide = 300 } = _a, props = __rest(_a, ["show", "hide"]);
    const children = useChildren();
    return ({type:'delay',props:{hide:hide,show:show},children:[{type:Page,props:{...props},children:[children]}]});
}
function Page(props) {
    const children = useChildren();
    const show = useShow();
    const hidden = useHidden();
    const timer = setTimeout(() => {
        if (history.hash) {
            scrollTo(`#${history.hash}`);
        }
    }, 300);
    onDestroy(() => clearTimeout(timer));
    return ({type:Flex,props:{vertical:true,align:'stretch',flex:true,...props,class:() => classes([
            modules_1f74907c.root,
            show.value && modules_1f74907c.show,
            (hidden === null || hidden === void 0 ? void 0 : hidden.value) && modules_1f74907c.hide,
        ])},children:[children]});
}

export { DelayPage, Page };
