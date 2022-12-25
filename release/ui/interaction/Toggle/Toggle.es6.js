import { style } from '@innet/dom';
import '../../prototypes/index.es6.js';
import modules_88cd194b from './Toggle.scss.es6.js';
import { Check } from '../../prototypes/Check/Check.es6.js';

const useStyle = style(Object.assign({ root: '' }, modules_88cd194b));
function Toggle(props) {
    const styles = useStyle();
    return {type:Check,props:{type:'checkbox',...props,class:styles}};
}

export { Toggle };
