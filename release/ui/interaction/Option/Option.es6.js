import { __rest } from 'tslib';
import { style, Ref, use } from '@innet/dom';
import classes from 'html-classes';
import modules_2fdd1792 from './Option.scss.es6.js';

const useStyle = style(modules_2fdd1792);
function Option(_a) {
    var { value, label, hint, showValues, preselected, selected, onPreselect, onSelect, onmousedown, onmouseenter, ref = new Ref() } = _a, props = __rest(_a, ["value", "label", "hint", "showValues", "preselected", "selected", "onPreselect", "onSelect", "onmousedown", "onmouseenter", "ref"]);
    const styles = useStyle();
    const handleClick = (e) => {
        e.preventDefault();
        onSelect === null || onSelect === void 0 ? void 0 : onSelect();
        onmousedown === null || onmousedown === void 0 ? void 0 : onmousedown(e);
    };
    return ({type:'div',props:{...props,ref:ref,onmouseenter:(e) => {
            onPreselect === null || onPreselect === void 0 ? void 0 : onPreselect();
            onmouseenter === null || onmouseenter === void 0 ? void 0 : onmouseenter(e);
        },onmousedown:handleClick,class:() => classes([
            styles.root,
            use(selected) && styles.selected,
            use(preselected) && styles.preselected,
        ])},children:[label || value,{type:'show',props:{state:showValues || hint},children:[{type:'span',props:{class:styles.value},children:[hint || value]}]}]});
}

export { Option };
