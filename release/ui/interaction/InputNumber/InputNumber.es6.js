import { __rest } from 'tslib';
import { strip } from '@cantinc/utils';
import { style, Ref, use, inject } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import { State } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import '../../typography/index.es6.js';
import '../Input/index.es6.js';
import modules_751631a6 from './InputNumber.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Input } from '../Input/Input.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { Divider } from '../../typography/Divider/Divider.es6.js';

const useStyles = style(modules_751631a6);
function InputNumber(_a = {}) {
    var _b;
    var { value = new State(0), step = 1, oninput, min, max, inputRef = new Ref(), onkeydown } = _a, props = __rest(_a, ["value", "step", "oninput", "min", "max", "inputRef", "onkeydown"]);
    const { hint } = useSlots();
    const styles = useStyles();
    oninput = actionProp(value, oninput);
    const increase = () => {
        const newValue = strip(use(value) + use(step));
        const currentMin = use(min);
        const currentMax = use(max);
        if (currentMin !== undefined && newValue < currentMin) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMin);
        }
        if (currentMax !== undefined && newValue > currentMax) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMax);
        }
        oninput === null || oninput === void 0 ? void 0 : oninput(newValue);
    };
    const decrease = () => {
        const newValue = strip(use(value) - use(step));
        const currentMin = use(min);
        const currentMax = use(max);
        if (currentMin !== undefined && newValue < currentMin) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMin);
        }
        if (currentMax !== undefined && newValue > currentMax) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMax);
        }
        oninput === null || oninput === void 0 ? void 0 : oninput(newValue);
    };
    let lastKey = '';
    return ({type:Input,props:{inputRef:inputRef,type:'number',value:() => String(use(value)),props:Object.assign(Object.assign({}, props.props), { input: Object.assign({ step: inject(step, String), min: inject(min, String), max: inject(max, String) }, (_b = props.props) === null || _b === void 0 ? void 0 : _b.input) }),...props,oninput:val => {
            const newValue = Number(val);
            const oldValue = use(value);
            if (oldValue !== newValue) {
                oninput === null || oninput === void 0 ? void 0 : oninput(newValue);
            }
            else if (!newValue && inputRef.value && lastKey === 'Backspace') {
                inputRef.value.value = '0';
            }
        },onkeydown:(e) => {
            lastKey = e.key;
            onkeydown === null || onkeydown === void 0 ? void 0 : onkeydown(e);
        },class:styles},children:[{type:'slot',props:{name:'after'},children:[{type:Icon,props:{icon:'minus',onclick:decrease,class:() => styles.minus}},{type:Divider,props:{vertical:true}},{type:Icon,props:{icon:'plus',onclick:increase,class:() => styles.minus}}]},hint && {type:'slot',children:[hint]}]});
}

export { InputNumber };
