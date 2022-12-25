import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import modules_e90d8779 from './BurgerButton.scss.es6.js';

const useStyle = style(modules_e90d8779);
function BurgerButton(_a = {}) {
    var { size = 18, style = '' } = _a, props = __rest(_a, ["size", "style"]);
    const styles = useStyle();
    const children = useChildren();
    return ({type:'button',props:{...props,style:() => `--ui-burger-button-size:${size}px;${use(style)}`,class:() => styles.root},children:[{type:'span',props:{class:() => styles.dash}},{type:'span',props:{class:() => styles.dash}},{type:'span',props:{class:() => styles.dash}},{type:'span',props:{class:() => styles.children},children:[children]}]});
}

export { BurgerButton };
