import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import modules_be945870 from './Aside.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyles = style(modules_be945870);
function Aside(_a = {}) {
    var { style, width = 320 } = _a, props = __rest(_a, ["style", "width"]);
    const children = useChildren();
    const styles = useStyles();
    return ({type:Flex,props:{element:'aside',align:'stretch',...props,style:Object.assign(Object.assign({}, style), { '--ui-aside-width': inject(width, width => width ? `${width}px` : '') }),class:() => styles.root},children:[children]});
}

export { Aside };
