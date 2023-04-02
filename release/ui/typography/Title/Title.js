'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../layout/index.js');
var Title$1 = require('./Title.scss.js');
var Pages = require('../../layout/Pages/Pages.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Title$1["default"]);
function Title(_a = {}) {
    var { h = 1, title, subTitle } = _a, props = tslib.__rest(_a, ["h", "title", "subTitle"]);
    const children = jsx.useChildren();
    const show = dom.useShow();
    const hide = dom.useHidden();
    const contextTitle = jsx.useContext(Pages.titleContext);
    const titleSeparator = jsx.useContext(Pages.titleSeparatorContext);
    const styles = useStyle();
    const showSubtitle = subTitle ? new watchState.Cache(() => Boolean(dom.use(subTitle))) : null;
    if (h === 1 && (title !== undefined || contextTitle !== undefined)) {
        if (contextTitle) {
            document.title = !title || contextTitle === title ? contextTitle : `${contextTitle}${titleSeparator}${title}`;
        }
        else if (title) {
            document.title = title;
        }
    }
    return ({type:Flex.Flex,props:{element:`h${h}`,wrap:true,...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[title,' ',children,{type:'show',props:{when:showSubtitle},children:[{type:'div',props:{class:() => styles.subTitle},children:[subTitle]}]}]});
}

exports.Title = Title;
