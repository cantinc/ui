import { useChildren } from '@innet/jsx';
import '../../layout/index.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

function Buttons(props) {
    const children = useChildren();
    return ({type:Flex,props:{...props},children:[children]});
}

export { Buttons };
