import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import modules_b78b788d from './BadgeFooter.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyle = style(modules_b78b788d);
function BadgeFooter(_a = {}) {
    var { offset } = _a, props = __rest(_a, ["offset"]);
    const children = useChildren();
    const styles = useStyle();
    return ({type:Flex,props:{padding:8,justify:'center',...props,style:Object.assign(Object.assign({}, props.style), { '--ui-badge-footer-offset': inject(offset, offset => offset ? `-${offset}px` : '') }),class:() => styles.root},children:[children]});
}

export { BadgeFooter };
