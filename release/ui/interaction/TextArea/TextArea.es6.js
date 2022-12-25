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
    var { resize = 'auto', rows = 4, inputRef = new Ref() } = _a, props = __rest(_a, ["resize", "rows", "inputRef"]);
    const styles = useStyles();
    const withChildren = useChildrenProvider();
    let style;
    const size = new State(0);
    const updateSize = () => {
        var _a;
        size.value = 0;
        size.value = Number((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.scrollHeight);
    };
    if (resize) {
        if (resize === 'auto') {
            style = (() => `--ui-textarea-min:${rows * 20}px;--ui-textarea-autosize:${size.value}px;`);
            const timer = setTimeout(updateSize);
            onDestroy(() => clearTimeout(timer));
        }
        else {
            style = () => `--ui-textarea-resize:${resize === true ? 'both' : resize};`;
        }
    }
    return withChildren({type:Input,props:{inputRef:inputRef,...props,class:styles,renderInput:(_a) => {
            var { oninput } = _a, props = __rest(_a, ["oninput"]);
            return ({type:'textarea',props:{rows:rows,style:style,required:props.required,placeholder:props.placeholder,ref:props.ref,name:props.name,disabled:props.disabled,oninput:(e) => {
                    ;
                    oninput(e);
                    updateSize();
                },_value:props._value,'data-value':props['data-value'],class:props.class},children:[props.value]});
        }}});
}

export { TextArea };
