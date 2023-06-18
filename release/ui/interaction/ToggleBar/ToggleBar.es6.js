import { __rest } from 'tslib';
import { style, useMapValue, useMapIndex, use, inject } from '@innet/dom';
import classes from 'html-classes';
import { State, Cache, Watch } from 'watch-state';
import '../../icons/index.es6.js';
import '../../layout/index.es6.js';
import modules_2eae4ece from './ToggleBar.scss.es6.js';
import { Icon } from '../../icons/Icon/Icon.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_2eae4ece);
function ToggleBarItem({ renderValue, onchange, index, onblur, onfocus }) {
    const item = useMapValue();
    const itemIndex = useMapIndex();
    return (update) => renderValue(use(item, update), {
        onchange: () => {
            onchange === null || onchange === void 0 ? void 0 : onchange(use(item, update).value);
        },
        className: update => classes([
            modules_2eae4ece.link,
            use(index, update) === use(itemIndex, update) && modules_2eae4ece.active,
        ]),
        onblur,
        onfocus: () => {
            onfocus(use(itemIndex));
        },
    });
}
function defaultToggleBarRender({ value, label, icon }, { className, onchange, onfocus, onblur, }) {
    return ({type:'span',props:{onfocus:onfocus,onblur:onblur,onmouseenter:onfocus,tabIndex:0,onkeydown:(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onchange();
            }
        },onmousedown:onchange,class:className},children:[{type:'show',props:{when:icon},children:[{type:Icon,props:{size:26,icon:icon}}]},label || value]});
}
function ToggleBar(_a) {
    var { values, value = new State(''), onchange, renderValue = defaultToggleBarRender, style, width } = _a, props = __rest(_a, ["values", "value", "onchange", "renderValue", "style", "width"]);
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
    return ({type:Flex,props:{element:'nav',align:'stretch',...props,onmouseleave:handleBlur,style:Object.assign(Object.assign({}, style), { '--ui-toggle-bar-width': inject(width, width => typeof width === 'string' ? width : width ? `${width}px` : ''), '--ui-toggle-bar-count': inject(values, values => String(values.length)), '--ui-toggle-bar-focus': inject(focusIndex, String), '--ui-toggle-bar-index': inject(index, String) }),class:() => classes([
            styles.root,
            styles[side.value],
            styles[`${focusSide.value}Focus`],
        ])},children:[{type:'div',props:{class:styles.focus}},{type:'div',props:{class:styles.selected}},{type:'map',props:{of:values,key:'value'},children:[{type:ToggleBarItem,props:{index:index,onblur:handleBlur,onchange:onchange,renderValue:renderValue,onfocus:(index) => {
            clearTimeout(blurTimeout);
            focusIndex.value = index;
        }}}]}]});
}

export { ToggleBar, defaultToggleBarRender };
