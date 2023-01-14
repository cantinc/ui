import { __rest } from 'tslib';
import { style, Ref, use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import classes from 'html-classes';
import { State, Cache } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import '../../popups/index.es6.js';
import '../Input/index.es6.js';
import modules_14af6ac7 from './Selector.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Input } from '../Input/Input.es6.js';
import { Arrow } from '../../icons/Arrow/Arrow.es6.js';
import { DropdownMenu } from '../../popups/DropdownMenu/DropdownMenu.es6.js';

const useStyle = style(modules_14af6ac7);
function Selector(_a = {}) {
    var { ref = new Ref(), placement, value = new State(''), values, oninput, searchValue, showValues, display = 'auto', search, exact, arrow = exact, onsearch } = _a, props = __rest(_a, ["ref", "placement", "value", "values", "oninput", "searchValue", "showValues", "display", "search", "exact", "arrow", "onsearch"]);
    const { hint, after } = useSlots();
    const styles = useStyle();
    const show = new State(false);
    const preselect = new State('');
    const popupRef = new Ref();
    oninput = actionProp(value, oninput);
    if (exact) {
        const oldOnInput = oninput;
        oninput = (value) => {
            if (show.value)
                return;
            oldOnInput(value);
        };
    }
    if (!searchValue && search) {
        const state = new State('');
        const oldOnSearch = onsearch;
        searchValue = () => state.value;
        onsearch = (value) => {
            state.value = value;
            oldOnSearch === null || oldOnSearch === void 0 ? void 0 : oldOnSearch(value);
        };
    }
    const displayValue = display === 'value'
        ? value
        : new Cache(() => {
            const currentValue = use(value) || '';
            const currentValues = use(values);
            if (!currentValues)
                return currentValue;
            const currentItem = currentValues.find(({ value }) => value === currentValue);
            return currentItem && currentValue ? currentItem.label || currentValue : currentValue;
        });
    const hide = () => {
        show.value = false;
        preselect.value = '';
        onsearch === null || onsearch === void 0 ? void 0 : onsearch('');
    };
    const valuesFilter = !values
        ? []
        : search
            ? () => use(values).filter(({ value: val, label }) => {
                const currentValue = (use(searchValue) || '').toLowerCase();
                if (label === null || label === void 0 ? void 0 : label.toLowerCase().includes(currentValue)) {
                    return true;
                }
                return (!label || showValues) && val.toLowerCase().startsWith(currentValue);
            }) || []
            : () => use(values);
    return ([{type:Input,props:{...props,value:displayValue,oninput:oninput,onmousedown:(e) => {
            var _a;
            if (!show.value) {
                show.value = true;
            }
            else if (exact || search) {
                hide();
            }
            ;
            (_a = props === null || props === void 0 ? void 0 : props.onclick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        },renderInput:(props) => ({type:'input',props:{...props,class:() => classes([
                props.class,
                styles.input,
            ]),autocomplete:'off',onkeydown:(e) => {
                var _a;
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    if (!show.value) {
                        e.preventDefault();
                        e.stopPropagation();
                        show.value = true;
                    }
                }
                (_a = props.onkeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
            },placeholder:() => show.value && search ? use(props._value) : use(props.placeholder),_value:() => show.value && search ? use(searchValue) || '' : use(props._value),oninput:(e) => {
                var _a, _b;
                if (show.value && search) {
                    onsearch === null || onsearch === void 0 ? void 0 : onsearch(e.target.value);
                    if (!exact) {
                        (_a = props.oninput) === null || _a === void 0 ? void 0 : _a.call(props, e);
                    }
                }
                else {
                    (_b = props.oninput) === null || _b === void 0 ? void 0 : _b.call(props, e);
                }
            },readOnly:!exact ? undefined : !search ? true : () => show.value ? undefined : true,onfocus:(e) => {
                var _a;
                show.value = true;
                (_a = props === null || props === void 0 ? void 0 : props.onfocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
            },onblur:(e) => {
                var _a;
                hide();
                (_a = props === null || props === void 0 ? void 0 : props.onblur) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }}}),ref:ref,class:() => [
            styles.root,
            exact && styles.exact,
        ]},children:[arrow
            ? ({type:'slot',props:{name:'after'},children:[{type:Arrow,props:{class:() => styles.arrow,direction:() => use(show) ? 'top' : 'down',onmousedown:(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    show.value = !show.value;
                }}}]})
            : after && ({type:'slot',props:{name:'after'},children:[after]}),' ',hint && ({type:'slot',props:{name:'hint'},children:[hint]})]},{type:DropdownMenu,props:{ref:popupRef,placement:placement,show:show,element:ref,values:valuesFilter,preselect:preselect,select:value,showValues:showValues,onSelect:(val) => {
            hide();
            oninput === null || oninput === void 0 ? void 0 : oninput(val);
        }}}]);
}

export { Selector };
