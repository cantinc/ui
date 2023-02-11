import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, Cache, createEvent } from 'watch-state';
import modules_620ef86c from './Check.scss.es6.js';

const styles = {
    root: modules_620ef86c.root,
    checked: '',
    disabled: '',
    input: '',
    icon: '',
};
const useStyle = style(styles);
function Check(_a) {
    var { label, checked = new State(false), onchange, disabled } = _a, props = __rest(_a, ["label", "checked", "onchange", "disabled"]);
    const children = useChildren();
    const styles = useStyle();
    const hasLabel = new Cache(() => Boolean(use(label)));
    if (checked instanceof State) {
        const oldOnChange = onchange;
        onchange = createEvent((val) => {
            checked.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        });
    }
    const handleChange = (e) => {
        onchange === null || onchange === void 0 ? void 0 : onchange(e.target.checked);
    };
    return ({type:'label',props:{class:() => classes([
            styles.root,
            use(checked) && styles.checked,
            use(disabled) && styles.disabled,
        ])},children:[{type:'input',props:{...props,class:() => styles.input,_checked:checked,_disabled:disabled,onchange:handleChange}},{type:'span',props:{class:() => styles.icon}},{type:'show',props:{state:hasLabel},children:[label]},children]});
}

export { Check };
