import { __rest } from 'tslib';
import { style, Ref, use, inject, useShow } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import classes from 'html-classes';
import { State, Cache } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import '../../layout/index.es6.js';
import modules_ab4cd8f7 from './Upload.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { getExtension } from '../../../utils/file/getExtension/getExtension.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';

const useStyle = style(modules_ab4cd8f7);
const imageExtensions = ['jpg', 'webp', 'png', 'jpeg', 'svg'];
function Upload(_a = {}) {
    var { width, height, radius = 8, label, error, hint, style, props, multiple, inputRef = new Ref(), files = new State([]), onchange, accept, name, disabled, clearable } = _a, rest = __rest(_a, ["width", "height", "radius", "label", "error", "hint", "style", "props", "multiple", "inputRef", "files", "onchange", "accept", "name", "disabled", "clearable"]);
    const { after, before } = useSlots();
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
            const ext = getExtension(file);
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
        if (inputRef.value) {
            inputRef.value.files = new DataTransfer().files;
        }
        onchange === null || onchange === void 0 ? void 0 : onchange([]);
    };
    const hintContent = inject(hint, hint => hint && ({type:'span',props:{...props === null || props === void 0 ? void 0 : props.hint,class:() => styles.hint},children:[hint]}));
    return ({type:Flex,props:{element:'label',align:'center',justify:'center',padding:12,gap:12,...rest,ondragleave:handleDragLeave,ondragend:handleDragLeave,ondragover:handleDragOver,ondrop:handleDrop,style:Object.assign(Object.assign({}, style), { '--ui-upload-radius': inject(radius, radius => radius ? `${radius}px` : ''), '--ui-upload-width': inject(width, width => !width ? '' : typeof width === 'string' ? width : `${width}px`), '--ui-upload-height': inject(height, height => height ? `${height}px` : '') }),class:() => classes([
            styles.root,
            over.value && styles.over,
            use(error) && styles.error,
        ])},children:[{type:'input',props:{...props === null || props === void 0 ? void 0 : props.input,accept:accept,name:name,disabled:disabled,multiple:multiple,type:'file',ref:inputRef,'data-empty':empty,oninput:handleInput,class:() => styles.input}},{type:'div',props:{class:() => styles.labels},children:[{type:'span',props:{class:() => styles.label},children:[label]},{type:'span',props:{class:() => styles.drag},children:[{type:'slot',props:{name:'ui-upload-drag'},children:['Move the file here']}]},{type:'span',props:{class:() => styles.drop},children:[{type:'slot',props:{name:'ui-upload-drop'},children:['Drop the file here']}]}]},{type:'span',props:{class:() => styles.focus}},before,{type:'div',props:{class:() => styles.files},children:[{type:'for',props:{of:files,key:'src'},children:[(item) => {
            var _a, _b;
            const show = useShow(400);
            const hide = new Ref();
            const getClass = () => classes([
                styles.image,
                show.value && styles.imageShow,
                hide.value.value && styles.imageHide,
            ]);
            return ({type:'delay',props:{show:300,ref:hide,hide:300},children:[item.value.src !== item.value.name
                    ? ({type:'img',props:{class:getClass,src:item.value.src}})
                    : ({type:'span',props:{class:getClass},children:[{type:'span',props:{class:() => styles.name},children:[(_b = (_a = item.value) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.replace(/\.[^.]+$/, '')]},{type:'span',props:{class:() => styles.extension},children:[getExtension(item.value)]}]})]});
        }]}]},after,' ',hintContent,{type:'show',props:{state:clearable},children:[{type:Icon,props:{icon:'cross',class:() => styles.clear,onclick:handleClear}}]}]});
}

export { Upload };
