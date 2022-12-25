'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
var Details$1 = require('./Details.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Arrow = require('../../icons/Arrow/Arrow.js');

const useStyle = dom.style(Details$1["default"]);
function* Details(_a = {}) {
    var _b;
    var { ref = new dom.Ref(), style = '', open = new watchState.State(false), onToggle } = _a, props = tslib.__rest(_a, ["ref", "style", "open", "onToggle"]);
    const { '': children, summary } = jsx.useSlots();
    const styles = useStyle();
    const height = new watchState.State(0);
    let defaultHeight = 0;
    onToggle = actionProp.actionProp(open, onToggle);
    yield ({type:'details',props:{...props,style:() => `height:${height.value}px;${dom.use(style)}`,ontoggle:(e) => {
            var _a, _b, _c, _d, _e;
            if ((_a = ref.value) === null || _a === void 0 ? void 0 : _a.open) {
                height.value = ((_b = ref.value) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0;
            }
            onToggle === null || onToggle === void 0 ? void 0 : onToggle(((_c = ref.value) === null || _c === void 0 ? void 0 : _c.open) || false);
            (_e = (_d = props).ontoggle) === null || _e === void 0 ? void 0 : _e.call(_d, e);
        },ref:ref,class:() => styles.root},children:[summary && ({type:'summary',props:{onclick:(e) => {
                const element = ref.value;
                if (element === null || element === void 0 ? void 0 : element.open) {
                    e.preventDefault();
                    height.value = defaultHeight;
                    setTimeout(() => {
                        element.open = false;
                    }, 300);
                }
            },class:() => styles.summary},children:[{type:Arrow.Arrow,props:{class:() => styles.arrow,size:16,direction:() => height.value === defaultHeight ? 'right' : 'down'}},summary]}),' ',children]});
    defaultHeight = ((_b = ref.value) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0;
    height.value = defaultHeight;
}

exports.Details = Details;
