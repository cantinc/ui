import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import modules_6b368672 from './Content.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyles = style(modules_6b368672);
function Content(_a = {}) {
    var { width, style = '' } = _a, props = __rest(_a, ["width", "style"]);
    const children = useChildren();
    const styles = useStyles();
    const newStyle = () => {
        const currentWidth = use(width);
        const widthStyle = currentWidth ? `--ui-content-width:${currentWidth}px;` : '';
        return `${widthStyle}${use(style)}`;
    };
    return ({type:Flex,props:{align:'stretch',...props,style:newStyle,class:() => styles.root},children:[children]});
}

export { Content };
