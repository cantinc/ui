import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import modules_565fa2bc from './Image.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyle = style(modules_565fa2bc);
function Image(_a) {
    var { style = '', src, ratio = 1, size, radius = 8 } = _a, props = __rest(_a, ["style", "src", "ratio", "size", "radius"]);
    const children = useChildren();
    const styles = useStyle();
    const newStyle = () => {
        const currentRatio = use(ratio);
        const currentRadius = use(radius);
        const ratioStyle = `--ui-image-ratio:${Array.isArray(currentRatio) ? `${currentRatio[0]} / ${currentRatio[1]}` : currentRatio};`;
        const radiusStyle = `--ui-image-radius:${typeof currentRadius === 'number' ? `${currentRadius}px` : currentRadius};`;
        return `background-image:url("${use(src)}");${radiusStyle}${ratioStyle}--ui-image-size:${use(size)}px;${use(style)}`;
    };
    return ({type:Flex,props:{...props,style:newStyle,class:() => styles.root},children:[children]});
}

export { Image };
