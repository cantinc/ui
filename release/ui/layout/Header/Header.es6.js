import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

function Header(props) {
    const children = useChildren();
    return ({type:Flex,props:{element:'header',...props},children:[children]});
}

export { Header };
