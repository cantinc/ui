import { style } from '@innet/dom';
import '../../prototypes/index.es6.js';
import modules_e1dbb462 from './Checkbox.scss.es6.js';
import { Check } from '../../prototypes/Check/Check.es6.js';

const useStyle = style(Object.assign({ root: '' }, modules_e1dbb462));
function Checkbox(props) {
    const styles = useStyle();
    return {type:Check,props:{type:'checkbox',...props,class:styles}};
}

export { Checkbox };
