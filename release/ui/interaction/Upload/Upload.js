'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
var Upload$1 = require('./Upload.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var getExtension = require('../../../utils/file/getExtension/getExtension.js');
var Icon = require('../../icons/Icon/Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Upload$1["default"]);
const imageExtensions = ['jpg', 'webp', 'png', 'jpeg'];
function Upload(_a = {}) {
    var { width, height, radius = 8, label, dragText, dropText, error, hint, style, props, multiple, ref = new dom.Ref(), files = new watchState.State([]), onchange } = _a, rest = tslib.__rest(_a, ["width", "height", "radius", "label", "dragText", "dropText", "error", "hint", "style", "props", "multiple", "ref", "files", "onchange"]);
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
        if (((_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files.length) && ref.value) {
            ref.value.files = e.dataTransfer.files;
            handleInput();
        }
        return false;
    };
    const handleInput = () => {
        var _a;
        if (!((_a = ref === null || ref === void 0 ? void 0 : ref.value) === null || _a === void 0 ? void 0 : _a.files))
            return;
        const result = [];
        for (const file of ref.value.files) {
            const ext = getExtension.getExtension(file);
            if (!imageExtensions.includes(ext)) {
                // @ts-expect-error
                file.src = ext;
                // @ts-expect-error
                result.push(file);
            }
            else {
                result.push(new Promise((resolve, reject) => {
                    const fr = new FileReader();
                    fr.onload = () => {
                        // @ts-expect-error
                        file.src = String(fr.result);
                        // @ts-expect-error
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
        if (ref.value) {
            ref.value.files = new DataTransfer().files;
        }
        onchange === null || onchange === void 0 ? void 0 : onchange([]);
    };
    const hintContent = dom.inject(hint, hint => hint && ({type:'span',props:{...props === null || props === void 0 ? void 0 : props.hint,class:() => styles.hint},children:[hint]}));
    return ({type:'label',props:{ondragleave:handleDragLeave,ondragend:handleDragLeave,ondragover:handleDragOver,ondrop:handleDrop,style:Object.assign(Object.assign({}, style), { '--ui-upload-radius': dom.inject(radius, radius => radius ? `${radius}px` : ''), '--ui-upload-width': dom.inject(width, width => width ? `${width}px` : ''), '--ui-upload-height': dom.inject(height, height => height ? `${height}px` : '') }),class:() => classes__default["default"]([
            styles.root,
            over.value && styles.over,
            dom.use(error) && styles.error,
        ])},children:[{type:'input',props:{...rest,multiple:multiple,type:'file',ref:ref,'data-empty':empty,oninput:handleInput,class:() => styles.input}},{type:'span',props:{class:() => styles.label},children:[label]},{type:'span',props:{class:() => styles.drag},children:[dragText]},{type:'span',props:{class:() => styles.drop},children:[dropText]},{type:'span',props:{class:() => styles.focus}},{type:'for',props:{of:files,key:'src'},children:[(item) => {
            var _a, _b;
            const show = dom.useShow(400);
            const hide = new dom.Ref();
            const getClass = () => classes__default["default"]([
                styles.image,
                show.value && styles.imageShow,
                hide.value.value && styles.imageHide,
            ]);
            return ({type:'delay',props:{show:300,ref:hide,hide:300},children:[item.value.src.length > 10
                    ? ({type:'img',props:{class:getClass,src:item.value.src}})
                    : ({type:'span',props:{class:getClass},children:[{type:'span',props:{class:() => styles.name},children:[(_b = (_a = item.value) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.replace(/\.[^.]+$/, '')]},{type:'span',props:{class:() => styles.extension},children:[item.value.src]}]})]});
        }]},hintContent,{type:Icon.Icon,props:{icon:'cross',class:() => styles.clear,onclick:handleClear}}]});
}

exports.Upload = Upload;
