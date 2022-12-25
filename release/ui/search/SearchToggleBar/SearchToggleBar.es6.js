import { __rest } from 'tslib';
import { history } from '@innet/dom';
import '../../interaction/index.es6.js';
import { ToggleBar } from '../../interaction/ToggleBar/ToggleBar.es6.js';

function SearchToggleBar(_a) {
    var { key } = _a, props = __rest(_a, ["key"]);
    function defaultSearchToggleBarRender({ value, label }, { className, onfocus, onblur }) {
        return ({type:'a',props:{onfocus:onfocus,onblur:onblur,onmouseenter:onfocus,onmousedown:(e) => {
                e.preventDefault();
            },class:className,href:value ? `?${key}=${value}` : '?'},children:[label !== null && label !== void 0 ? label : value]});
    }
    return ({type:ToggleBar,props:{...props,value:() => history.getSearch(key) || '',element:'nav',renderValue:defaultSearchToggleBarRender}});
}

export { SearchToggleBar };
