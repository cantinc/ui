import { __rest } from 'tslib';
import '../../layout/Spin/index.es6.js';
import { Spin } from '../../layout/Spin/Spin.es6.js';

function AsyncSpin(_a = {}) {
    var { hide = 300, show = 0 } = _a, props = __rest(_a, ["hide", "show"]);
    return ({type:'delay',props:{show:show,hide:hide},children:[{type:Spin,props:{...props}}]});
}

export { AsyncSpin };
