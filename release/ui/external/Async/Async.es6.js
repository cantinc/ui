import { __asyncGenerator, __await } from 'tslib';
import '../../layout/index.es6.js';
import { AsyncSpin } from '../../layout/AsyncSpin/AsyncSpin.es6.js';

function Async({ import: request, name, props, asyncProps, children, showDelay = 300, }) {
    return __asyncGenerator(this, arguments, function* Async_1() {
        yield yield __await({type:AsyncSpin,props:{flex:true,align:'center',justify:'center',showDelay:showDelay}});
        const [result, aProps,] = yield __await(Promise.all([
            request(),
            asyncProps === null || asyncProps === void 0 ? void 0 : asyncProps(),
        ]));
        const Component = name ? result[name] : 'default' in result ? result.default : undefined;
        yield yield __await(Component && ({type:'delay',props:{show:300},children:[{type:Component,props:{...props,...aProps},children:[children]}]}));
    });
}

export { Async };
