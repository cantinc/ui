'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
var Title$1 = require('./Title.scss.js');
var Pages = require('../../layout/Pages/Pages.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Title$1["default"]);
function Title(_a = {}) {
    var { h = 1, text } = _a, props = tslib.__rest(_a, ["h", "text"]);
    const children = jsx.useChildren();
    const show = dom.useShow();
    const hide = dom.useHidden();
    const contextTitle = jsx.useContext(Pages.titleContext);
    const titleSeparator = jsx.useContext(Pages.titleSeparatorContext);
    const styles = useStyle();
    if (h === 1 && (text !== undefined || contextTitle !== undefined)) {
        if (contextTitle) {
            document.title = !text || contextTitle === text ? contextTitle : `${contextTitle}${titleSeparator}${text}`;
        }
        else if (text) {
            document.title = text;
        }
    }
    return ({type:Flex.Flex,props:{element:`h${h}`,...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[text,' ',children]});
}

exports.Title = Title;
