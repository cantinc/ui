import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../../layout/index.es6.js';
import modules_e0c2dd20 from './CardsFlex.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_e0c2dd20);
function CardsFlex(props) {
    const children = useChildren();
    const styles = useStyle();
    return ({type:Flex,props:{...props,class:() => styles.root},children:[children]});
}

export { CardsFlex };
