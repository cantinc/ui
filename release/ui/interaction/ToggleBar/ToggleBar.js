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
function ToggleBarItem({ renderValue, onchange, index, onblur, onfocus }) {
    const item = dom.useMapValue();
    const itemIndex = dom.useMapIndex();
    return (update) => renderValue(dom.use(item, update), {
        onchange: () => {
            onchange === null || onchange === void 0 ? void 0 : onchange(dom.use(item, update).value);
        },
        className: update => classes__default["default"]([
            ToggleBar$1["default"].link,
            dom.use(index, update) === dom.use(itemIndex, update) && ToggleBar$1["default"].active,
        ]),
        onblur,
        onfocus: () => {
            onfocus(dom.use(itemIndex));
        },
    });
}
function defaultToggleBarRender({ value, label, icon }, { className, onchange, onfocus, onblur, }) {
    return ({type:'span',props:{onfocus:onfocus,onblur:onblur,onmouseenter:onfocus,tabIndex:0,onkeydown:(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onchange();
            }
        },onmousedown:onchange,class:className},children:[{type:'show',props:{when:icon},children:[{type:Icon.Icon,props:{size:26,icon:icon}}]},label || value]});
}
function ToggleBar(_a) {
    var { values, value = new watchState.State(''), onchange, renderValue = defaultToggleBarRender, style, width } = _a, props = tslib.__rest(_a, ["values", "value", "onchange", "renderValue", "style", "width"]);
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
    return ({type:Flex.Flex,props:{element:'nav',align:'stretch',...props,onmouseleave:handleBlur,style:Object.assign(Object.assign({}, style), { '--ui-toggle-bar-width': dom.inject(width, width => typeof width === 'string' ? width : width ? `${width}px` : ''), '--ui-toggle-bar-count': dom.inject(values, values => String(values.length)), '--ui-toggle-bar-focus': dom.inject(focusIndex, String), '--ui-toggle-bar-index': dom.inject(index, String) }),class:() => classes__default["default"]([
            styles.root,
            styles[side.value],
            styles[`${focusSide.value}Focus`],
        ])},children:[{type:'div',props:{class:styles.focus}},{type:'div',props:{class:styles.selected}},{type:'map',props:{of:values,key:'value'},children:[{type:ToggleBarItem,props:{index:index,onblur:handleBlur,onchange:onchange,renderValue:renderValue,onfocus:(index) => {
            clearTimeout(blurTimeout);
            focusIndex.value = index;
        }}}]}]});
}

exports.ToggleBar = ToggleBar;
exports.defaultToggleBarRender = defaultToggleBarRender;
