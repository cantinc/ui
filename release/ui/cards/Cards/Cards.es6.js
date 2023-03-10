import { __rest } from 'tslib';
import { style, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../../layout/index.es6.js';
import modules_8d3e6600 from './Cards.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_8d3e6600);
function* Cards(_a = {}) {
    var { ref = new Ref(), timeout } = _a, props = __rest(_a, ["ref", "timeout"]);
    const styles = useStyle();
    const children = useChildren();
    const getTop = () => { var _a; return (_a = ref.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top; };
    const updateTop = () => {
        var _a;
        (_a = ref.value) === null || _a === void 0 ? void 0 : _a.style.setProperty('--ui-cards-top', `${getTop()}px`);
    };
    if (timeout) {
        setTimeout(updateTop, timeout);
    }
    yield ({type:Flex,props:{gap:24,wrap:true,...props,ref:ref,class:styles.root},children:[children]});
    updateTop();
}

export { Cards };
