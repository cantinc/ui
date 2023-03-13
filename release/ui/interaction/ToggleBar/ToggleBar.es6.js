import { __rest } from 'tslib';
import { style, use, inject } from '@innet/dom';
import classes from 'html-classes';
import { State, Cache, Watch } from 'watch-state';
import '../../icons/index.es6.js';
import '../../layout/index.es6.js';
import modules_2eae4ece from './ToggleBar.scss.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_2eae4ece);
function defaultToggleBarRender({ value, label, icon }, { className, onchange, onfocus, onblur, }) {
    return ({type:'span',props:{onfocus:onfocus,onblur:onblur,onmouseenter:onfocus,tabIndex:0,onkeydown:(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onchange();
            }
        },onmousedown:onchange,class:className},children:[{type:'show',props:{state:icon},children:[{type:Icon,props:{size:26,icon:icon}}]},label || value]});
}
function ToggleBar(_a) {
    var { values, value = new State(''), onchange, renderValue = defaultToggleBarRender, style } = _a, props = __rest(_a, ["values", "value", "onchange", "renderValue", "style"]);
    const styles = useStyle();
    if (value instanceof State) {
        const oldOnChange = onchange;
        onchange = val => {
            value.value = val;
            oldOnChange === null || oldOnChange === void 0 ? void 0 : oldOnChange(val);
        };
    }
    const index = new Cache(() => {
        const val = use(value) || '';
        return use(values).findIndex(({ value }) => val === value);
    });
    const focusIndex = new State();
    new Watch(() => {
        focusIndex.value = index.value;
    });
    let lastSideIndex = -1;
    const side = new Cache(() => {
        const result = lastSideIndex > index.value;
        lastSideIndex = index.value;
        return result ? 'back' : 'forward';
    });
    let lastFocusIndex = -1;
    const focusSide = new Cache(() => {
        const result = lastFocusIndex > focusIndex.value;
        lastFocusIndex = focusIndex.value;
        return result ? 'back' : 'forward';
    });
    let blurTimeout;
    const handleBlur = () => {
        blurTimeout = setTimeout(() => {
            focusIndex.value = index.value;
        });
    };
    return ({type:Flex,props:{element:'nav',align:'stretch',...props,onmouseleave:handleBlur,style:Object.assign(Object.assign({}, style), { '--ui-toggle-bar-count': inject(values, values => String(values.length)), '--ui-toggle-bar-focus': inject(focusIndex, String), '--ui-toggle-bar-index': inject(index, String) }),class:() => classes([
            styles.root,
            styles[side.value],
            styles[`${focusSide.value}Focus`],
        ])},children:[{type:'div',props:{class:styles.focus}},{type:'div',props:{class:styles.selected}},{type:'for',props:{of:values,key:'value'},children:[(item) => renderValue(item.value, {
            onchange: () => onchange === null || onchange === void 0 ? void 0 : onchange(item.value.value),
            className: () => classes([
                styles.link,
                index.value === item.index && styles.active,
            ]),
            onblur: handleBlur,
            onfocus: () => {
                clearTimeout(blurTimeout);
                focusIndex.value = item.index;
            },
        })]}]});
}

export { ToggleBar, defaultToggleBarRender };
