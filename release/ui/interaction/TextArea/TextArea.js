'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../Input/index.js');
var TextArea$1 = require('./TextArea.scss.js');
var useChildrenProvider = require('../../../hooks/useChildrenProvider/useChildrenProvider.js');
var Input = require('../Input/Input.js');

const useStyles = dom.style(TextArea$1["default"]);
function TextArea(_a = {}) {
    var { resize = 'auto', rows = 4, style, inputRef = new dom.Ref() } = _a, props = tslib.__rest(_a, ["resize", "rows", "style", "inputRef"]);
    const styles = useStyles();
    const withChildren = useChildrenProvider.useChildrenProvider();
    const size = new watchState.State(0);
    const updateSize = () => {
        var _a;
        size.value = 0;
        size.value = Number((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.scrollHeight);
    };
    if (resize === 'auto') {
        const timer = setTimeout(updateSize);
        watchState.onDestroy(() => clearTimeout(timer));
    }
    return withChildren({type:Input.Input,props:{inputRef:inputRef,...props,class:styles,renderInput:(_a) => {
            var { oninput } = _a, props = tslib.__rest(_a, ["oninput"]);
            return ({type:'textarea',props:{rows:rows,style:Object.assign(Object.assign({}, style), { '--ui-textarea-resize': !resize || resize === 'auto' ? '' : resize === true ? 'both' : resize, '--ui-textarea-min': !resize || resize !== 'auto' ? '' : `${rows * 20}px`, '--ui-textarea-autosize': !resize || resize !== 'auto' ? '' : () => `${size.value}px` }),required:props.required,placeholder:props.placeholder,ref:props.ref,name:props.name,disabled:props.disabled,oninput:(e) => {
                    ;
                    oninput(e);
                    updateSize();
                },_value:props._value,'data-value':props['data-value'],class:props.class},children:[props.value]});
        }}});
}

exports.TextArea = TextArea;
