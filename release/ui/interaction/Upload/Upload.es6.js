import { __rest } from 'tslib';
import { style, Ref, use, inject, useShow } from '@innet/dom';
import classes from 'html-classes';
import { State, Cache } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import modules_ab4cd8f7 from './Upload.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { getExtension } from '../../../utils/file/getExtension/getExtension.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';

const useStyle = style(modules_ab4cd8f7);
const imageExtensions = ['jpg', 'webp', 'png', 'jpeg'];
function Upload(_a = {}) {
    var { width, height, radius = 8, label, dragText, dropText, error, hint, style, props, multiple, ref = new Ref(), files = new State([]), onchange } = _a, rest = __rest(_a, ["width", "height", "radius", "label", "dragText", "dropText", "error", "hint", "style", "props", "multiple", "ref", "files", "onchange"]);
    const styles = useStyle();
    const over = new State(false);
    const empty = new Cache(() => String(!use(files).length));
    onchange = actionProp(files, onchange);
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
            const ext = getExtension(file);
            if (!imageExtensions.includes(ext)) {
                result.push({
                    src: ext,
                    file,
                });
            }
            else {
                result.push(new Promise((resolve, reject) => {
                    const fr = new FileReader();
                    fr.onload = () => resolve({
                        src: String(fr.result),
                        file,
                    });
                    fr.onerror = reject;
                    fr.readAsDataURL(file);
                }));
            }
            if (!use(multiple)) {
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
    const hintContent = inject(hint, hint => hint && ({type:'span',props:{...props === null || props === void 0 ? void 0 : props.hint,class:() => styles.hint},children:[hint]}));
    return ({type:'label',props:{ondragleave:handleDragLeave,ondragend:handleDragLeave,ondragover:handleDragOver,ondrop:handleDrop,style:Object.assign(Object.assign({}, style), { '--ui-upload-radius': inject(radius, radius => radius ? `${radius}px` : ''), '--ui-upload-width': inject(width, width => width ? `${width}px` : ''), '--ui-upload-height': inject(height, height => height ? `${height}px` : '') }),class:() => classes([
            styles.root,
            over.value && styles.over,
            use(error) && styles.error,
        ])},children:[{type:'input',props:{...rest,multiple:multiple,type:'file',ref:ref,'data-empty':empty,oninput:handleInput,class:() => styles.input}},{type:'span',props:{class:() => styles.label},children:[label]},{type:'span',props:{class:() => styles.drag},children:[dragText]},{type:'span',props:{class:() => styles.drop},children:[dropText]},{type:'span',props:{class:() => styles.focus}},{type:'for',props:{of:files,key:'src'},children:[(item) => {
            var _a;
            const show = useShow(400);
            const hide = new Ref();
            const getClass = () => classes([
                styles.image,
                show.value && styles.imageShow,
                hide.value.value && styles.imageHide,
            ]);
            return ({type:'delay',props:{show:300,ref:hide,hide:300},children:[item.value.src.length > 10
                    ? ({type:'img',props:{class:getClass,src:item.value.src}})
                    : ({type:'span',props:{class:getClass},children:[{type:'span',props:{class:() => styles.name},children:[(_a = item.value.file) === null || _a === void 0 ? void 0 : _a.name.replace(/\.[^.]+$/, '')]},{type:'span',props:{class:() => styles.extension},children:[item.value.src]}]})]});
        }]},hintContent,{type:Icon,props:{icon:'cross',class:() => styles.clear,onclick:handleClear}}]});
}

export { Upload };
