import { __rest } from 'tslib';
import { style, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../layout/index.es6.js';
import modules_fd0db19c from './Overlay.scss.es6.js';
import { useEscapeListener } from '../../../hooks/useEscapeListener/useEscapeListener.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_fd0db19c);
function Overlay(_a) {
    var { ref = new Ref() } = _a, props = __rest(_a, ["ref"]);
    const children = useChildren();
    const styles = useStyle();
    let mouseDown = false;
    useEscapeListener(() => handleClose('escape'));
    const handleMouseDown = (e) => {
        if (e.target === ref.value) {
            mouseDown = true;
        }
    };
    const handleClose = (result) => {
        var _a, _b;
        const element = (_a = ref.value) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        (_b = element === null || element === void 0 ? void 0 : element.close) === null || _b === void 0 ? void 0 : _b.call(element, result);
    };
    const handleMouseUp = (e) => {
        if (mouseDown && e.target === ref.value) {
            handleClose('background');
        }
        mouseDown = false;
    };
    return ({type:Flex,props:{...props,ref:ref,onmousedown:handleMouseDown,onmouseup:handleMouseUp,class:() => styles.root},children:[children]});
}

export { Overlay };
