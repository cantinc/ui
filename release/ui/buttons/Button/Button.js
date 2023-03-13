'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
require('../../layout/index.js');
var Button$1 = require('./Button.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Button$1["default"]);
function Button(_a = {}) {
    var { view = 'primary', loading, disabled, width } = _a, props = tslib.__rest(_a, ["view", "loading", "disabled", "width"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const className = () => classes__default["default"]([
        styles.root,
        {
            [styles.primary]: view === 'primary',
            [styles.secondary]: view === 'secondary',
            [styles.negative]: view === 'negative',
            [styles.positive]: view === 'positive',
        },
    ]);
    return ({type:Flex.Flex,props:{justify:'center',inline:true,padding:24,element:'button',loadingOffset:1,disabled:loading,...props,loading:loading,style:Object.assign(Object.assign({}, props === null || props === void 0 ? void 0 : props.style), { '--ui-button-width': dom.inject(width, width => width !== undefined ? `${width}px` : '') }),class:className},children:[children]});
}

exports.Button = Button;
