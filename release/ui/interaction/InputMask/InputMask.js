'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var Mask = require('inputmask');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../Input/index.js');
var useChildrenProvider = require('../../../hooks/useChildrenProvider/useChildrenProvider.js');
var Input = require('../Input/Input.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Mask__default = /*#__PURE__*/_interopDefaultLegacy(Mask);

const defaultMask = {
    showMaskOnHover: false,
};
function* InputMask(_a) {
    var { mask, inputRef = new dom.Ref() } = _a, props = tslib.__rest(_a, ["mask", "inputRef"]);
    const withChildren = useChildrenProvider.useChildrenProvider();
    yield withChildren({type:Input.Input,props:{inputRef:inputRef,...props}});
    if (typeof mask === 'string' || Array.isArray(mask)) {
        mask = Object.assign({ mask }, defaultMask);
    }
    else {
        mask = Object.assign(Object.assign({}, defaultMask), mask);
    }
    if (inputRef.value) {
        const maskInstance = Mask__default["default"](mask).mask(inputRef.value);
        watchState.onDestroy(() => maskInstance.remove());
    }
}

exports.InputMask = InputMask;
