import { style } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import '../../layout/index.es6.js';
import modules_fa723eb8 from './Buttons.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyles = style(modules_fa723eb8);
function Buttons(props) {
    const children = useChildren();
    const styles = useStyles();
    return ({type:Flex,props:{wrap:true,gap:24,...props,class:() => styles.root},children:[children]});
}

export { Buttons };
