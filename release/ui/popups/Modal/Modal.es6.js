import { __rest } from 'tslib';
import { style, Ref } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import classes from 'html-classes';
import { State, onDestroy } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../buttons/index.es6.js';
import '../../icons/index.es6.js';
import '../../layout/index.es6.js';
import modules_8f0e29bb from './Modal.scss.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { setOverflow } from '../../../utils/setOverflow/setOverflow.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Button } from '../../buttons/Button/Button.es6.js';

const useStyles = style(modules_8f0e29bb);
let modalsCount = 0;
function Modal(_a = {}) {
    var { buttons, width, style, headButtons = ['close'], buttonProps = {}, onclosed, onclose, onshow, onmousedown } = _a, props = __rest(_a, ["buttons", "width", "style", "headButtons", "buttonProps", "onclosed", "onclose", "onshow", "onmousedown"]);
    const styles = useStyles();
    const _b = useSlots(), { '': children, title, content, subTitle } = _b, slots = __rest(_b, ['', "title", "content", "subTitle"]);
    const hidden = new Ref();
    const show = new State(false);
    const element = new Ref();
    const headButtonsLength = headButtons === null || headButtons === void 0 ? void 0 : headButtons.length;
    const buttonsLength = buttons === null || buttons === void 0 ? void 0 : buttons.length;
    if (!('button-close' in slots)) {
        slots['button-close'] = {type:Icon,props:{icon:'cross'}};
    }
    setTimeout(() => {
        show.value = true;
        onshow === null || onshow === void 0 ? void 0 : onshow();
    }, 300);
    const handleClose = (result) => {
        var _a;
        if ((_a = hidden.value) === null || _a === void 0 ? void 0 : _a.value)
            return;
        const close = () => onclosed === null || onclosed === void 0 ? void 0 : onclosed(result);
        if (onclose) {
            return onclose(result, close);
        }
        close();
    };
    if (!modalsCount) {
        setOverflow('hidden');
    }
    modalsCount++;
    onDestroy(() => {
        modalsCount--;
        if (!modalsCount) {
            setOverflow('');
        }
    });
    return ({type:'delay',props:{ref:hidden,hide:300},children:[{type:'div',props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-modal-width': width ? `${width}px` : '' }),ref:element,_close:() => handleClose,class:() => {
            var _a;
            return classes([
                styles.root,
                show.value && styles.show,
                ((_a = hidden.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
            ]);
        }},children:[title
            ? ({type:'header',props:{class:styles.header},children:[title || null,' ',subTitle && ({type:'div',props:{class:styles.subTitle},children:[subTitle]})]})
            : null,' ',headButtonsLength
            ? ({type:'div',props:{class:styles.headButtons},children:[headButtons.map(id => ({type:'button',props:{...buttonProps[id],'data-button':id,onclick:() => handleClose(id),class:styles.headButton},children:[slots[`button-${id}`] || id]}))]})
            : null,' ',content && ({type:'div',props:{class:styles.content},children:[content]}),' ',children,' ',buttonsLength
            ? ({type:Flex,props:{reverse:true,justify:'center',wrap:true,padding:16,gap:16},children:[buttons.map((id, index) => ({type:Button,props:{flex:true,view:index ? 'secondary' : 'primary',...buttonProps[id],'data-button':id,onclick:() => handleClose(id)},children:[slots[`button-${id}`] || id]}))]})
            : null]}]});
}

export { Modal };
