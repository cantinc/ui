import { __rest } from 'tslib';
import { getSearchParam } from '@watch-state/history-api';
import '../../interaction/index.es6.js';
import { ToggleBar } from '../../interaction/ToggleBar/ToggleBar.es6.js';

function SearchToggleBar(_a) {
    var { key } = _a, props = __rest(_a, ["key"]);
    function defaultSearchToggleBarRender({ value, label }, { className, onfocus, onblur }) {
        return ({type:'a',props:{onfocus:onfocus,onblur:onblur,onmouseenter:onfocus,onmousedown:(e) => {
                e.preventDefault();
            },class:className,scrollTo:-1,href:value ? `?${key}=${value}` : '?'},children:[label !== null && label !== void 0 ? label : value]});
    }
    return ({type:ToggleBar,props:{...props,value:getSearchParam(key),element:'nav',renderValue:defaultSearchToggleBarRender}});
}

export { SearchToggleBar };
