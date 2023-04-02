'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var classes = require('html-classes');
var Option$1 = require('./Option.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Option$1["default"]);
function Option(_a) {
    var { value, label, hint, showValues, preselected, selected, onPreselect, onSelect, onmousedown, onmouseenter, ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["value", "label", "hint", "showValues", "preselected", "selected", "onPreselect", "onSelect", "onmousedown", "onmouseenter", "ref"]);
    const styles = useStyle();
    const handleClick = (e) => {
        e.preventDefault();
        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
        onmousedown === null || onmousedown === void 0 ? void 0 : onmousedown(e);
    };
    return ({type:'div',props:{...props,ref:ref,onmouseenter:(e) => {
            onPreselect === null || onPreselect === void 0 ? void 0 : onPreselect();
            onmouseenter === null || onmouseenter === void 0 ? void 0 : onmouseenter(e);
        },onmousedown:handleClick,class:() => classes__default["default"]([
            styles.root,
            dom.use(selected) && styles.selected,
            dom.use(preselected) && styles.preselected,
        ])},children:[label || value,{type:'show',props:{when:showValues || hint},children:[{type:'span',props:{class:styles.value},children:[hint || value]}]}]});
}

exports.Option = Option;
