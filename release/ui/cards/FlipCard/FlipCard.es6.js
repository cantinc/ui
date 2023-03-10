import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import '../../layout/index.es6.js';
import '../Card/index.es6.js';
import modules_59301fdb from './FlipCard.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Card } from '../Card/Card.es6.js';

const useStyle = style(modules_59301fdb);
function FlipCard(_a = {}) {
    var { flip, flex, inline, onclick } = _a, props = __rest(_a, ["flip", "flex", "inline", "onclick"]);
    const { '': children, backside } = useSlots();
    const styles = useStyle();
    function handleClick(e) {
        onclick === null || onclick === void 0 ? void 0 : onclick.call(this, e);
    }
    return ({type:Flex,props:{inline:inline,align:'stretch',flex:flex,class:() => [
            styles.root,
            use(flip) && styles.flip,
        ]},children:[{type:Card,props:{flex:true,...props,onclick:handleClick,class:() => styles.front},children:[children]},{type:Card,props:{...props,onclick:handleClick,class:() => styles.back},children:[backside]}]});
}

export { FlipCard };
