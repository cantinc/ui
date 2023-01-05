import { __rest } from 'tslib';
import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import modules_dff10c0d from './Layout.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyles = style(modules_dff10c0d);
function Layout(_a = {}) {
    var { width, style } = _a, props = __rest(_a, ["width", "style"]);
    const children = useChildren();
    const styles = useStyles();
    return ({type:Flex,props:{flex:true,align:'stretch',...props,class:() => styles.root,style:Object.assign(Object.assign({}, style), { '--ui-layout-width': width ? `${width}px` : '' })},children:[children]});
}

export { Layout };
