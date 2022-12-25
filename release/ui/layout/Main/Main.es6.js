import { useChildren } from '@innet/jsx';
import '../Flex/index.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

function Main(props) {
    const children = useChildren();
    return ({type:Flex,props:{flex:true,element:'main',...props},children:[children]});
}

export { Main };
