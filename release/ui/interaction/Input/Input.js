'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
require('../../layout/index.js');
var Input$1 = require('./Input.scss.js');
var debounceCall = require('../../../utils/debounceCall/debounceCall.js');
var Icon = require('../../icons/Icon/Icon.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Input$1["default"]);
const defaultRenderInput = (props) => ({type:'input',props:{...props}});
function Input(_a = {}) {
    var { label, value = new watchState.State(''), oninput, props, placeholder, autofocus, renderInput = defaultRenderInput, error, disabled, required, inputRef = new dom.Ref(), name, type, clearable, debounce } = _a, rest = tslib.__rest(_a, ["label", "value", "oninput", "props", "placeholder", "autofocus", "renderInput", "error", "disabled", "required", "inputRef", "name", "type", "clearable", "debounce"]);
    const styles = useStyle();
    const { before, after, hint } = jsx.useSlots();
    if (value instanceof watchState.State) {
        const oldOnChange = oninput;
        oninput = (val) => {
            value.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        };
    }
    if (debounce && oninput) {
        oninput = debounceCall.debounceCall(oninput, debounce === true ? 300 : debounce);
    }
    const handleInput = (e) => {
        oninput === null || oninput === void 0 ? void 0 : oninput(e.target.value);
    };
    const handleChange = (e) => {
        if (e.target.value !== dom.use(value)) {
            oninput === null || oninput === void 0 ? void 0 : oninput(e.target.value);
        }
    };
    const elementClass = () => styles.input;
    const element = renderInput(Object.assign(Object.assign({ type,
        disabled, required: dom.inject(required, required => required ? true : undefined), placeholder }, props === null || props === void 0 ? void 0 : props.input), { oninput: handleInput, onchange: handleChange, 'data-value': value, _value: value, class: elementClass, ref: inputRef, name }));
    const labelContent = label
        ? ({type:'span',props:{...props === null || props === void 0 ? void 0 : props.label,class:() => classes__default["default"]([
                styles.label,
                dom.use(required) === 'star' && styles.labelStar,
            ])},children:[label]})
        : null;
    const beforeContent = before
        ? {type:'span',props:{...props === null || props === void 0 ? void 0 : props.before,class:() => styles.before},children:[before]}
        : null;
    const afterContent = after
        ? {type:'span',props:{...props === null || props === void 0 ? void 0 : props.after,class:() => styles.after},children:[after]}
        : null;
    const hintContent = hint
        ? {type:'span',props:{...props === null || props === void 0 ? void 0 : props.hint,class:() => styles.hint},children:[hint]}
        : null;
    const clearContent = clearable
        ? ({type:Icon.Icon,props:{icon:'cross',...props === null || props === void 0 ? void 0 : props.clear,onmousedown:(e) => {
                e.preventDefault();
                oninput === null || oninput === void 0 ? void 0 : oninput('');
            },class:() => styles.clear}})
        : null;
    if (autofocus) {
        const timer = setTimeout(() => {
            var _a;
            (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }, typeof autofocus === 'number' ? autofocus : 0);
        watchState.onDestroy(() => clearTimeout(timer));
    }
    return ({type:Flex.Flex,props:{align:'center',padding:16,gap:8,element:'label',...rest,onmousedown:(e) => {
            var _a;
            if (e.target !== inputRef.value) {
                e.preventDefault();
            }
            ;
            (_a = rest === null || rest === void 0 ? void 0 : rest.onmousedown) === null || _a === void 0 ? void 0 : _a.call(rest, e);
        },class:() => [
            styles.root,
            dom.use(label) && styles.withLabel,
            dom.use(error) && styles.error,
        ]},children:[element,' ',clearContent,' ',beforeContent,' ',labelContent,' ',afterContent,' ',hintContent,{type:'span',props:{...props === null || props === void 0 ? void 0 : props.border,class:() => styles.border}}]});
}

exports.Input = Input;
exports.defaultRenderInput = defaultRenderInput;
