import { __asyncGenerator, __await } from 'tslib';
import '../../layout/index.es6.js';
import { AsyncSpin } from '../../layout/AsyncSpin/AsyncSpin.es6.js';

function Async({ import: request, name, props, children, showDelay = 300, }) {
    return __asyncGenerator(this, arguments, function* Async_1() {
        yield yield __await({type:AsyncSpin,props:{flex:true,align:'center',justify:'center',showDelay:showDelay}});
        const result = yield __await(request());
        const Component = name ? result[name] : result;
        yield yield __await(({type:'delay',props:{show:300},children:[{type:Component,props:{...props},children:[children]}]}));
    });
}

export { Async };
