import { __rest } from 'tslib';
import { style, Ref, inject, use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import { State, onDestroy } from 'watch-state';
import '../../icons/index.es6.js';
import '../../layout/index.es6.js';
import modules_4318a3aa from './Input.scss.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_4318a3aa);
const defaultRenderInput = (props) => ({type:'input',props:{...props}});
function Input(_a = {}) {
    var { label, value = new State(''), oninput, props, placeholder, autofocus, renderInput = defaultRenderInput, error, disabled, required, inputRef = new Ref(), name, type, loading, clearable } = _a, rest = __rest(_a, ["label", "value", "oninput", "props", "placeholder", "autofocus", "renderInput", "error", "disabled", "required", "inputRef", "name", "type", "loading", "clearable"]);
    const styles = useStyle();
    const { before, after, hint } = useSlots();
    if (value instanceof State) {
        const oldOnChange = oninput;
        oninput = (val) => {
            value.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        };
    }
    const handleInput = (e) => {
        oninput === null || oninput === void 0 ? void 0 : oninput(e.target.value);
    };
    const elementClass = () => styles.input;
    const element = renderInput(Object.assign(Object.assign({ type,
        disabled,
        required,
        placeholder }, props === null || props === void 0 ? void 0 : props.input), { oninput: handleInput, 'data-value': value, _value: value, class: elementClass, ref: inputRef, name }));
    const labelContent = label
        ? {type:'span',props:{...props === null || props === void 0 ? void 0 : props.label,class:styles.label},children:[label]}
        : null;
    const beforeContent = before
        ? {type:'span',props:{...props === null || props === void 0 ? void 0 : props.before,class:styles.before},children:[before]}
        : null;
    const afterContent = after
        ? {type:'span',props:{...props === null || props === void 0 ? void 0 : props.after,class:styles.after},children:[after]}
        : null;
    const hintContent = hint
        ? {type:'span',props:{...props === null || props === void 0 ? void 0 : props.hint,class:styles.hint},children:[hint]}
        : null;
    const clearContent = clearable
        ? ({type:Icon,props:{icon:'cross',...props === null || props === void 0 ? void 0 : props.clear,onmousedown:(e) => {
                e.preventDefault();
                oninput === null || oninput === void 0 ? void 0 : oninput('');
            },class:() => styles.clear}})
        : null;
    if (autofocus) {
        const timer = setTimeout(() => {
            var _a;
            (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }, typeof autofocus === 'number' ? autofocus : 0);
        onDestroy(() => clearTimeout(timer));
    }
    const loaded = inject(loading, loading => !loading);
    return ({type:Flex,props:{align:'center',padding:16,gap:8,element:'label',...rest,onmousedown:(e) => {
            var _a;
            if (e.target !== inputRef.value) {
                e.preventDefault();
            }
            ;
            (_a = rest === null || rest === void 0 ? void 0 : rest.onmousedown) === null || _a === void 0 ? void 0 : _a.call(rest, e);
        },class:() => [
            styles.root,
            use(label) && styles.withLabel,
            use(error) && styles.error,
            use(loading) && styles.loading,
        ]},children:[{type:'show',props:{state:loaded},children:[element,' ',clearContent,' ',beforeContent,' ',labelContent,' ',afterContent,' ',hintContent,{type:'span',props:{...props === null || props === void 0 ? void 0 : props.border,class:() => styles.border}}]}]});
}

export { Input, defaultRenderInput };
