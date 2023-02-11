import { __rest } from 'tslib';
import { style, inject } from '@innet/dom';
import '../../prototypes/index.es6.js';
import modules_5cfc0055 from './Tag.scss.es6.js';
import { Check } from '../../prototypes/Check/Check.es6.js';

const useStyle = style(Object.assign({ root: '' }, modules_5cfc0055));
function Tag(_a) {
    var { type = 'checkbox', label } = _a, props = __rest(_a, ["type", "label"]);
    const styles = useStyle();
    return ({type:Check,props:{type:type,...props,label:inject(label, label => label && ({type:'span',props:{class:() => styles.label},children:[label]})),class:styles}});
}

export { Tag };
