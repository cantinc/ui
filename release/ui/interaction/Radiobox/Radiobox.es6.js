import { __rest } from 'tslib';
import { style, useMapValue, inject, use } from '@innet/dom';
import { State } from 'watch-state';
import '../../layout/index.es6.js';
import '../../prototypes/index.es6.js';
import modules_5714d771 from './Radiobox.scss.es6.js';
import { Check } from '../../prototypes/Check/Check.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(Object.assign({ root: '', radio: '' }, modules_5714d771));
function Radiobox(_a = {}) {
    var { values, value = new State(''), onchange, name, disabled } = _a, props = __rest(_a, ["values", "value", "onchange", "name", "disabled"]);
    const styles = useStyle();
    const checkStyles = Object.create(styles);
    Object.defineProperty(checkStyles, 'root', {
        get() {
            return styles.radio;
        },
    });
    if (value instanceof State) {
        const oldOnChange = onchange;
        onchange = (val) => {
            value.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        };
    }
    const Item = () => {
        const item = useMapValue();
        const itemValue = inject(item, item => use(item.value));
        return ({type:Check,props:{disabled:disabled,name:name,checked:() => use(value) === use(itemValue),type:'radio',onchange:() => {
                onchange === null || onchange === void 0 ? void 0 : onchange(use(itemValue));
            },class:checkStyles}});
    };
    return ({type:Flex,props:{gap:16,...props,class:() => styles.root},children:[{type:'map',props:{of:values || [],key:'value'},children:[{type:Item}]}]});
}

export { Radiobox };
