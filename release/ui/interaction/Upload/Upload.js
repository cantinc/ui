'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
require('../../layout/index.js');
var Upload$1 = require('./Upload.scss.js');
var getExtension = require('../../../utils/file/getExtension/getExtension.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Flex = require('../../layout/Flex/Flex.js');
var Icon = require('../../icons/Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Upload$1["default"]);
const imageExtensions = ['jpg', 'webp', 'png', 'jpeg', 'svg'];
function UploadItem() {
    const item = dom.useMapValue();
    const show = dom.useShow(400);
    const hide = new dom.Ref();
    const src = new watchState.Cache(() => dom.use(item).src);
    const name = new watchState.Cache(() => dom.use(item).name);
    const isImage = new watchState.Cache(() => src.value !== name.value);
    const title = new watchState.Cache(() => { var _a; return (_a = name.value) === null || _a === void 0 ? void 0 : _a.replace(/\.[^.]+$/, ''); });
    const getClass = () => classes__default["default"]([
        Upload$1["default"].image,
        show.value && Upload$1["default"].imageShow,
        hide.value.value && Upload$1["default"].imageHide,
    ]);
    return ({type:'delay',props:{show:300,ref:hide,hide:300},children:[() => isImage.value
            ? ({type:'img',props:{class:getClass,src:src}})
            : ({type:'span',props:{class:getClass},children:[{type:'span',props:{class:() => Upload$1["default"].name},children:[title]},{type:'span',props:{class:() => Upload$1["default"].extension},children:[() => getExtension.getExtension(dom.use(item))]}]})]});
}
function Upload(_a = {}) {
    var { width, height, radius = 8, label, error, hint, style, props, multiple, inputRef = new dom.Ref(), files = new watchState.State([]), onchange, accept, name, disabled, clearable } = _a, rest = tslib.__rest(_a, ["width", "height", "radius", "label", "error", "hint", "style", "props", "multiple", "inputRef", "files", "onchange", "accept", "name", "disabled", "clearable"]);
    const { after, before } = jsx.useSlots();
    const styles = useStyle();
    const over = new watchState.State(false);
    const empty = new watchState.Cache(() => String(!dom.use(files).length));
    onchange = actionProp.actionProp(files, onchange);
    const handleDragOver = (e) => {
        e.preventDefault();
        over.value = true;
    };
    const handleDragLeave = () => {
        over.value = false;
    };
    const handleDrop = (e) => {
        var _a;
        e.preventDefault();
        over.value = false;
        if (((_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files.length) && inputRef.value) {
            inputRef.value.files = e.dataTransfer.files;
            handleInput();
        }
        return false;
    };
    const handleInput = () => {
        var _a;
        if (!((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.value) === null || _a === void 0 ? void 0 : _a.files))
            return;
        const result = [];
        for (const file of inputRef.value.files) {
            const ext = getExtension.getExtension(file);
            if (!imageExtensions.includes(ext)) {
                // @ts-expect-error: Making the file as UploadFile
                file.src = file.name;
                // @ts-expect-error: Making the file as UploadFile
                result.push(file);
            }
            else {
                result.push(new Promise((resolve, reject) => {
                    const fr = new FileReader();
                    fr.onload = () => {
                        // @ts-expect-error: Making the file as UploadFile
                        file.src = String(fr.result);
                        // @ts-expect-error: Making the file as UploadFile
                        resolve(file);
                    };
                    fr.onerror = reject;
                    fr.readAsDataURL(file);
                }));
            }
            if (!dom.use(multiple)) {
                break;
            }
        }
        Promise.all(result).then(newFiles => {
            onchange === null || onchange === void 0 ? void 0 : onchange(newFiles);
        });
    };
    const handleClear = (e) => {
        e.preventDefault();
        if (inputRef.value) {
            inputRef.value.files = new DataTransfer().files;
        }
        onchange === null || onchange === void 0 ? void 0 : onchange([]);
    };
    const hintContent = dom.inject(hint, hint => hint && ({type:'span',props:{...props === null || props === void 0 ? void 0 : props.hint,class:() => styles.hint},children:[hint]}));
    return ({type:Flex.Flex,props:{element:'label',align:'center',justify:'center',padding:12,gap:12,...rest,ondragleave:handleDragLeave,ondragend:handleDragLeave,ondragover:handleDragOver,ondrop:handleDrop,style:Object.assign(Object.assign({}, style), { '--ui-upload-radius': dom.inject(radius, radius => radius ? `${radius}px` : ''), '--ui-upload-width': dom.inject(width, width => !width ? '' : typeof width === 'string' ? width : `${width}px`), '--ui-upload-height': dom.inject(height, height => height ? `${height}px` : '') }),class:() => classes__default["default"]([
            styles.root,
            over.value && styles.over,
            dom.use(error) && styles.error,
        ])},children:[{type:'input',props:{...props === null || props === void 0 ? void 0 : props.input,accept:accept,name:name,disabled:disabled,multiple:multiple,type:'file',ref:inputRef,'data-empty':empty,oninput:handleInput,class:() => styles.input}},{type:'div',props:{class:() => styles.labels},children:[{type:'span',props:{class:() => styles.label},children:[label]},{type:'span',props:{class:() => styles.drag},children:[{type:'slot',props:{name:'ui-upload-drag'},children:['Move the file here']}]},{type:'span',props:{class:() => styles.drop},children:[{type:'slot',props:{name:'ui-upload-drop'},children:['Drop the file here']}]}]},{type:'span',props:{class:() => styles.focus}},before,{type:'div',props:{class:() => styles.files},children:[{type:'map',props:{of:files,key:'src'},children:[{type:UploadItem}]}]},after,' ',hintContent,{type:'show',props:{when:clearable},children:[{type:Icon.Icon,props:{icon:'cross',class:() => styles.clear,onclick:handleClear}}]}]});
}

exports.Upload = Upload;
