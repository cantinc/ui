'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../icons/index.js');
require('../../popups/index.js');
require('../Input/index.js');
var Selector$1 = require('./Selector.scss.js');
var Input = require('../Input/Input.js');
var Arrow = require('../../icons/Arrow/Arrow.js');
var DropdownMenu = require('../../popups/DropdownMenu/DropdownMenu.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Selector$1["default"]);
function Selector(_a = {}) {
    var { ref = new dom.Ref(), placement, value = new watchState.State(''), values, oninput, searchValue, showValues, display = 'auto', search, exact, arrow = exact, onsearch } = _a, props = tslib.__rest(_a, ["ref", "placement", "value", "values", "oninput", "searchValue", "showValues", "display", "search", "exact", "arrow", "onsearch"]);
    const { hint, after } = jsx.useSlots();
    const styles = useStyle();
    const show = new watchState.State(false);
    const preselect = new watchState.State('');
    const popupRef = new dom.Ref();
    if (value instanceof watchState.State) {
        oninput = (val) => {
            value.value = val;
        };
    }
    if (!searchValue && search) {
        const state = new watchState.State('');
        const oldOnSearch = onsearch;
        searchValue = () => state.value;
        onsearch = (value) => {
            state.value = value;
            oldOnSearch === null || oldOnSearch === void 0 ? void 0 : oldOnSearch(value);
        };
    }
    const displayValue = display === 'value'
        ? value
        : new watchState.Cache(() => {
            const currentValue = dom.use(value) || '';
            const currentValues = dom.use(values);
            if (!currentValues)
                return currentValue;
            const currentItem = currentValues.find(({ value }) => value === currentValue);
            return currentItem ? currentItem.label || currentValue : currentValue;
        });
    const hide = () => {
        show.value = false;
        preselect.value = '';
        onsearch === null || onsearch === void 0 ? void 0 : onsearch('');
    };
    const valuesFilter = !values
        ? []
        : search
            ? () => dom.use(values).filter(({ value: val, label }) => {
                const currentValue = (dom.use(searchValue) || '').toLowerCase();
                if (label === null || label === void 0 ? void 0 : label.toLowerCase().includes(currentValue)) {
                    return true;
                }
                return (!label || showValues) && val.toLowerCase().startsWith(currentValue);
            }) || []
            : () => dom.use(values);
    return ([{type:Input.Input,props:{...props,value:displayValue,oninput:oninput,onmousedown:(e) => {
            var _a;
            if (!show.value) {
                show.value = true;
            }
            else if (exact || search) {
                hide();
            }
            ;
            (_a = props === null || props === void 0 ? void 0 : props.onclick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        },renderInput:(props) => ({type:'input',props:{...props,class:() => classes__default["default"]([
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
            },placeholder:() => show.value && search ? dom.use(props._value) : dom.use(props.placeholder),_value:() => show.value && search ? dom.use(searchValue) || '' : dom.use(props._value),oninput:(e) => {
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
            ? ({type:'slot',props:{name:'after'},children:[{type:Arrow.Arrow,props:{class:() => styles.arrow,direction:() => dom.use(show) ? 'top' : 'down',onmousedown:(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    show.value = !show.value;
                }}}]})
            : after && ({type:'slot',props:{name:'after'},children:[after]}),' ',hint && ({type:'slot',props:{name:'hint'},children:[hint]})]},{type:DropdownMenu.DropdownMenu,props:{ref:popupRef,placement:placement,show:show,element:ref,values:valuesFilter,preselect:preselect,select:value,showValues:showValues,onSelect:(val) => {
            oninput === null || oninput === void 0 ? void 0 : oninput(val);
            hide();
        }}}]);
}

exports.Selector = Selector;
