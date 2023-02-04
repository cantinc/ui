import { __rest } from 'tslib';
import { strip } from '@cantinc/utils';
import { style, use, inject } from '@innet/dom';
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
    var { value = new State(0), step = 1, oninput } = _a, props = __rest(_a, ["value", "step", "oninput"]);
    const { hint } = useSlots();
    const styles = useStyles();
    oninput = actionProp(value, oninput);
    const increase = () => {
        oninput === null || oninput === void 0 ? void 0 : oninput(strip(use(value) + use(step)));
    };
    const decrease = () => {
        oninput === null || oninput === void 0 ? void 0 : oninput(use(value) - use(step));
    };
    return ({type:Input,props:{type:'number',value:() => String(use(value)),oninput:value => oninput === null || oninput === void 0 ? void 0 : oninput(Number(value)),props:Object.assign(Object.assign({}, props.props), { input: Object.assign({ step: inject(step, String) }, (_b = props.props) === null || _b === void 0 ? void 0 : _b.input) }),...props,class:styles},children:[{type:'slot',props:{name:'after'},children:[{type:Icon,props:{icon:'minus',onclick:decrease,class:() => styles.minus}},{type:Divider,props:{vertical:true}},{type:Icon,props:{icon:'plus',onclick:increase,class:() => styles.minus}}]},hint && {type:'slot',children:[hint]}]});
}

export { InputNumber };
