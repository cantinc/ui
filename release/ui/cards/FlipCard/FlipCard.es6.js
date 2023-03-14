import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import '../Card/index.es6.js';
import '../CardsFlex/index.es6.js';
import modules_59301fdb from './FlipCard.scss.es6.js';
import { CardsFlex } from '../CardsFlex/CardsFlex.es6.js';
import { Card } from '../Card/Card.es6.js';

const useStyle = style(modules_59301fdb);
function FlipCard(_a = {}) {
    var { flip, flex, inline, onclick, animation = 'vertical', revertAnimation } = _a, props = __rest(_a, ["flip", "flex", "inline", "onclick", "animation", "revertAnimation"]);
    const { '': children, backside } = useSlots();
    const styles = useStyle();
    function handleClick(e) {
        onclick === null || onclick === void 0 ? void 0 : onclick.call(this, e);
    }
    return ({type:CardsFlex,props:{inline:inline,align:'stretch',flex:flex,class:() => [
            styles.root,
            revertAnimation && styles.revert,
            styles[animation],
            use(flip) && styles.flip,
        ]},children:[{type:Card,props:{flex:true,...props,onclick:handleClick,class:{
            root: () => styles.front,
            show: () => styles.show,
            shown: () => styles.shown,
            hide: () => styles.hide,
        }},children:[children]},{type:Card,props:{...props,onclick:handleClick,class:() => styles.back},children:[backside]}]});
}

export { FlipCard };
