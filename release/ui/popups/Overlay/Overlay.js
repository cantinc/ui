'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../layout/index.js');
var Overlay$1 = require('./Overlay.scss.js');
var useEscapeListener = require('../../../hooks/useEscapeListener/useEscapeListener.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Overlay$1["default"]);
function Overlay(_a) {
    var { ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["ref"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    let mouseDown = false;
    useEscapeListener.useEscapeListener(() => handleClose('escape'));
    const handleMouseDown = (e) => {
        if (e.target === ref.value) {
            mouseDown = true;
        }
    };
    const handleClose = (result) => {
        var _a, _b;
        const element = (_a = ref.value) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        (_b = element === null || element === void 0 ? void 0 : element.close) === null || _b === void 0 ? void 0 : _b.call(element, result);
    };
    const handleMouseUp = (e) => {
        if (mouseDown && e.target === ref.value) {
            handleClose('background');
        }
        mouseDown = false;
    };
    return ({type:Flex.Flex,props:{...props,ref:ref,onmousedown:handleMouseDown,onmouseup:handleMouseUp,class:() => styles.root},children:[children]});
}

exports.Overlay = Overlay;
