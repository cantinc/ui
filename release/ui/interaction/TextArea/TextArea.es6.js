import { __rest } from 'tslib';
import { style, Ref } from '@innet/dom';
import { State, onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../Input/index.es6.js';
import modules_2bbb453f from './TextArea.scss.es6.js';
import { useChildrenProvider } from '../../../hooks/useChildrenProvider/useChildrenProvider.es6.js';
import { Input } from '../Input/Input.es6.js';

const useStyles = style(modules_2bbb453f);
function TextArea(_a = {}) {
    var { resize = 'auto', rows = 4, style, inputRef = new Ref() } = _a, props = __rest(_a, ["resize", "rows", "style", "inputRef"]);
    const styles = useStyles();
    const withChildren = useChildrenProvider();
    const size = new State(0);
    const updateSize = () => {
        var _a, _b, _c, _d, _e, _f;
        const scrollHeight = Number((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.scrollHeight);
        const clientHeight = Number((_b = inputRef.value) === null || _b === void 0 ? void 0 : _b.clientHeight);
        if (scrollHeight !== clientHeight) {
            size.value = scrollHeight;
        }
        else {
            size.value--;
            let scrollHeight = Number((_c = inputRef.value) === null || _c === void 0 ? void 0 : _c.scrollHeight);
            let clientHeight = Number((_d = inputRef.value) === null || _d === void 0 ? void 0 : _d.clientHeight);
            if (scrollHeight === clientHeight) {
                while ((scrollHeight = Number((_e = inputRef.value) === null || _e === void 0 ? void 0 : _e.scrollHeight)) === (clientHeight = Number((_f = inputRef.value) === null || _f === void 0 ? void 0 : _f.clientHeight))) {
                    size.value -= 10;
                    if (size.value < 0) {
                        size.value = 0;
                        break;
                    }
                }
                size.value = scrollHeight;
            }
            else {
                size.value++;
            }
        }
    };
    if (resize === 'auto') {
        const timer = setTimeout(updateSize);
        onDestroy(() => clearTimeout(timer));
    }
    return withChildren({type:Input,props:{inputRef:inputRef,...props,class:styles,renderInput:(_a) => {
            var { oninput } = _a, props = __rest(_a, ["oninput"]);
            return ({type:'textarea',props:{rows:rows,style:Object.assign(Object.assign({}, style), { '--ui-textarea-resize': !resize || resize === 'auto' ? '' : resize === true ? 'both' : resize, '--ui-textarea-min': !resize || resize !== 'auto' ? '' : `${rows * 20}px`, '--ui-textarea-autosize': !resize || resize !== 'auto' ? '' : () => `${size.value}px` }),required:props.required,placeholder:props.placeholder,ref:props.ref,name:props.name,disabled:props.disabled,oninput:(e) => {
                    ;
                    oninput(e);
                    if (resize === 'auto') {
                        updateSize();
                    }
                },_value:props._value,'data-value':props['data-value'],class:props.class},children:[props.value]});
        }}});
}

export { TextArea };
