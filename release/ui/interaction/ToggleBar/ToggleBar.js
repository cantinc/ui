'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../icons/index.js');
require('../../layout/index.js');
var ToggleBar$1 = require('./ToggleBar.scss.js');
var Icon = require('../../icons/Icon/Icon.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(ToggleBar$1["default"]);
function defaultToggleBarRender({ value, label, icon }, { className, onchange, onfocus, onblur, }) {
    return ({type:'span',props:{onfocus:onfocus,onblur:onblur,onmouseenter:onfocus,tabIndex:0,onkeydown:(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onchange();
            }
        },onmousedown:onchange,class:className},children:[{type:'show',props:{state:icon},children:[{type:Icon.Icon,props:{size:26,icon:icon}}]},label || value]});
}
function ToggleBar(_a) {
    var { values, value = new watchState.State(''), onchange, renderValue = defaultToggleBarRender, style, loading } = _a, props = tslib.__rest(_a, ["values", "value", "onchange", "renderValue", "style", "loading"]);
    const styles = useStyle();
    if (value instanceof watchState.State) {
        const oldOnChange = onchange;
        onchange = val => {
            value.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        };
    }
    const index = new watchState.Cache(() => {
        const val = dom.use(value) || '';
        return dom.use(values).findIndex(({ value }) => val === value);
    });
    const focusIndex = new watchState.State();
    new watchState.Watch(() => {
        focusIndex.value = index.value;
    });
    let lastSideIndex = -1;
    const side = new watchState.Cache(() => {
        const result = lastSideIndex > index.value;
        lastSideIndex = index.value;
        return result ? 'back' : 'forward';
    });
    let lastFocusIndex = -1;
    const focusSide = new watchState.Cache(() => {
        const result = lastFocusIndex > focusIndex.value;
        lastFocusIndex = focusIndex.value;
        return result ? 'back' : 'forward';
    });
    let blurTimeout;
    const handleBlur = () => {
        blurTimeout = setTimeout(() => {
            focusIndex.value = index.value;
        });
    };
    return ({type:Flex.Flex,props:{element:'nav',align:'stretch',...props,onmouseleave:handleBlur,style:Object.assign(Object.assign({}, style), { '--ui-toggle-bar-count': dom.inject(values, values => String(values.length)), '--ui-toggle-bar-focus': dom.inject(focusIndex, String), '--ui-toggle-bar-index': dom.inject(index, String) }),class:() => classes__default["default"]([
            styles.root,
            dom.use(loading) && styles.loading,
            styles[side.value],
            styles[`${focusSide.value}Focus`],
        ])},children:[{type:'div',props:{class:styles.focus}},{type:'div',props:{class:styles.selected}},{type:'for',props:{of:values,key:'value'},children:[(item) => renderValue(item.value, {
            onchange: () => onchange === null || onchange === void 0 ? void 0 : onchange(item.value.value),
            className: () => classes__default["default"]([
                styles.link,
                index.value === item.index && styles.active,
            ]),
            onblur: handleBlur,
            onfocus: () => {
                clearTimeout(blurTimeout);
                focusIndex.value = item.index;
            },
        })]}]});
}

exports.ToggleBar = ToggleBar;
exports.defaultToggleBarRender = defaultToggleBarRender;
