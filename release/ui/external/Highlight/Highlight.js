'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var classes = require('html-classes');
var Prism = require('prismjs');
var Highlight$1 = require('./Highlight.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);
var Prism__default = /*#__PURE__*/_interopDefaultLegacy(Prism);

function* Highlight(_a) {
    var { ref = new dom.Ref(), code, language } = _a, props = tslib.__rest(_a, ["ref", "code", "language"]);
    yield ({type:'pre',props:{...props,class:() => classes__default["default"]([
            `language-${language}`,
            Highlight$1["default"].root,
            dom.statePropToWatchProp(props.class),
        ]),ref:ref}});
    if ((ref === null || ref === void 0 ? void 0 : ref.value) && language in Prism__default["default"].languages) {
        ref.value.innerHTML = Prism__default["default"].highlight(code, Prism__default["default"].languages[language], language);
    }
}

exports.Highlight = Highlight;
