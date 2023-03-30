'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
var Check$1 = require('./Check.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const styles = {
    root: Check$1["default"].root,
    checked: '',
    disabled: '',
    input: '',
    icon: '',
};
const useStyle = dom.style(styles);
function Check(_a) {
    var { label, checked = new watchState.State(false), onchange, disabled } = _a, props = tslib.__rest(_a, ["label", "checked", "onchange", "disabled"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const hasLabel = new watchState.Cache(() => Boolean(dom.use(label)));
    if (checked instanceof watchState.State) {
        const oldOnChange = onchange;
        onchange = watchState.createEvent((val) => {
            checked.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        });
    }
    const handleChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setTimeout(() => {
            onchange === null || onchange === void 0 ? void 0 : onchange(!dom.use(checked));
        });
    };
    return ({type:'label',props:{class:() => classes__default["default"]([
            styles.root,
            dom.use(checked) && styles.checked,
            dom.use(disabled) && styles.disabled,
        ])},children:[{type:'input',props:{...props,class:() => styles.input,_checked:checked,_disabled:disabled,onclick:handleChange}},{type:'span',props:{class:() => styles.icon}},{type:'show',props:{state:hasLabel},children:[label]},children]});
}

exports.Check = Check;
