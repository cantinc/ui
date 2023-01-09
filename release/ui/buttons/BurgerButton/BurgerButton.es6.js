import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import '../../icons/index.es6.js';
import modules_e90d8779 from './BurgerButton.scss.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';

const useStyle = style(modules_e90d8779);
function BurgerButton(_a = {}) {
    var { size = 16, style } = _a, props = __rest(_a, ["size", "style"]);
    const styles = useStyle();
    return ({type:'button',props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-burger-button-size': inject(size, size => `${size}px`) }),class:() => styles.root},children:[{type:Icon,props:{size:size,icon:'menu'}}]});
}

export { BurgerButton };
