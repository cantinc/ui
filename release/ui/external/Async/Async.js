'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('../../layout/index.js');
var AsyncSpin = require('../../layout/AsyncSpin/AsyncSpin.js');

function Async({ import: request, name, props, asyncProps, children, showDelay = 300, }) {
    return tslib.__asyncGenerator(this, arguments, function* Async_1() {
        yield yield tslib.__await({type:AsyncSpin.AsyncSpin,props:{flex:true,align:'center',justify:'center',showDelay:showDelay}});
        const [result, aProps,] = yield tslib.__await(Promise.all([
            request(),
            asyncProps === null || asyncProps === void 0 ? void 0 : asyncProps(),
        ]));
        const Component = name ? result[name] : 'default' in result ? result.default : undefined;
        yield yield tslib.__await(Component && ({type:'delay',props:{show:300},children:[{type:Component,props:{...props,...aProps},children:[children]}]}));
    });
}

exports.Async = Async;
