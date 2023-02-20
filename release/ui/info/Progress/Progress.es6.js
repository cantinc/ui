import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import '../../layout/index.es6.js';
import modules_23263730 from './Progress.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_23263730);
function Progress(_a) {
    var { style, value } = _a, props = __rest(_a, ["style", "value"]);
    const styles = useStyle();
    return ({type:Flex,props:{padding:8,...props,style:Object.assign(Object.assign({}, style), { '--ui-progress': inject(value, String) }),class:() => styles.root}});
}

export { Progress };
