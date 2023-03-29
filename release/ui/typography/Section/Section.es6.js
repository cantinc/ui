import { __rest } from 'tslib';
import { style } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import '../../layout/index.es6.js';
import '../Title/index.es6.js';
import modules_31bb216d from './Section.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Title } from '../Title/Title.es6.js';

const useStyle = style(modules_31bb216d, { root: '' });
function Section(_a = {}) {
    var { title, titleProps, subTitle } = _a, props = __rest(_a, ["title", "titleProps", "subTitle"]);
    const { '': children, title: aside } = useSlots();
    const styles = useStyle();
    return ({type:Flex,props:{element:'section',align:'stretch',vertical:true,gap:24,...props,class:() => styles.root},children:[{type:Title,props:{h:2,justify:'between',align:'end',gap:16,...titleProps,subTitle:subTitle,title:title,class:() => styles.title},children:[aside]},children]});
}

export { Section };
