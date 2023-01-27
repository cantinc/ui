'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('../../layout/index.js');
var AsyncSpin = require('../../layout/AsyncSpin/AsyncSpin.js');

function Async({ import: request, name, props, children, showDelay = 300, }) {
    return tslib.__asyncGenerator(this, arguments, function* Async_1() {
        yield yield tslib.__await({type:AsyncSpin.AsyncSpin,props:{flex:true,align:'center',justify:'center',showDelay:showDelay}});
        const result = yield tslib.__await(request());
        const Component = name ? result[name] : result;
        yield yield tslib.__await(({type:'delay',props:{show:300},children:[{type:Component,props:{...props},children:[children]}]}));
    });
}

exports.Async = Async;
