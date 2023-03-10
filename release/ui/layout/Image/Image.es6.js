import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import modules_565fa2bc from './Image.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyle = style(modules_565fa2bc);
function Image(_a) {
    var { src, size, ratio = 1, radius = 8, style } = _a, props = __rest(_a, ["src", "size", "ratio", "radius", "style"]);
    const children = useChildren();
    const styles = useStyle();
    return ({type:Flex,props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-image-ratio': inject(ratio, ratio => Array.isArray(ratio) ? `${ratio[0]} / ${ratio[1]}` : String(ratio)), '--ui-image-radius': inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius), '--ui-image-size': inject(size, size => `${size}px`), 'background-image': inject(src, src => `url("${src}")`) }),class:() => styles.root},children:[children]});
}

export { Image };
