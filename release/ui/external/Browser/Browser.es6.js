import { __rest } from 'tslib';
import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import '../../layout/index.es6.js';
import modules_1b809a56 from './Browser.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_1b809a56);
function Browser(_a = {}) {
    var { height = 'auto' } = _a, props = __rest(_a, ["height"]);
    const children = useChildren();
    const styles = useStyle();
    return ({type:'div',props:{...props,class:() => styles.root},children:[{type:Flex,props:{padding:8,gap:8},children:[{type:'span',props:{class:() => classes([styles.point, styles.pointClose])}},{type:'span',props:{class:() => classes([styles.point, styles.pointHide])}},{type:'span',props:{class:() => classes([styles.point, styles.pointFull])}}]},{type:'div',props:{style:{
            '--ui-iframe-height': typeof height === 'string' ? height : `${height}px`,
        },class:() => styles.content},children:[children]}]});
}

export { Browser };
