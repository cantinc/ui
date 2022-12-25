'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
require('../../external/AsyncSpin/index.js');
require('../../layout/index.js');
var Button$1 = require('./Button.scss.js');
var Flex = require('../../layout/Flex/Flex.js');
var AsyncSpin = require('../../external/AsyncSpin/AsyncSpin.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Button$1["default"]);
function Button(_a = {}) {
    var { view = 'primary', type, loading, disabled, link } = _a, props = tslib.__rest(_a, ["view", "type", "loading", "disabled", "link"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const className = () => classes__default["default"]([
        styles.root,
        {
            [styles.primary]: view === 'primary',
            [styles.secondary]: view === 'secondary',
            [styles.negative]: view === 'negative',
            [styles.positive]: view === 'positive',
            [styles.loading]: dom.use(loading),
        },
    ]);
    const disabledValue = (() => (disabled !== null && disabled !== void 0 ? disabled : dom.use(loading)) || undefined);
    return ({type:Flex.Flex,props:{justify:'center',element:link ? 'a' : 'button',inline:true,padding:24,...props,type:type,disabled:disabledValue,class:className},children:[{type:'show',props:{state:loading},children:[{type:AsyncSpin.AsyncSpin,props:{class:() => styles.spin}}]},children]});
}

exports.Button = Button;
