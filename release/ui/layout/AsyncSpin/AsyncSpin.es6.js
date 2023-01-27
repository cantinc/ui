import { __rest } from 'tslib';
import { style, Ref, useShow } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Spin/index.es6.js';
import modules_dceb3461 from './AsyncSpin.scss.es6.js';
import { Spin } from '../Spin/Spin.es6.js';

const useStyle = style(modules_dceb3461);
function AsyncSpin(_a = {}) {
    var { delay = 300, showDelay = 0, style } = _a, props = __rest(_a, ["delay", "showDelay", "style"]);
    const children = useChildren();
    const styles = useStyle();
    const hide = new Ref();
    const show = useShow(delay + showDelay);
    return ({type:'delay',props:{ref:hide,show:showDelay,hide:delay},children:[{type:Spin,props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-spin-delay': `${delay}ms` }),class:() => {
            var _a;
            return [
                styles.root,
                show.value && styles.show,
                ((_a = hide.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ];
        }},children:[children]}]});
}

export { AsyncSpin };
