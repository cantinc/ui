'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

function DefaultIcon(_a = {}) {
    var { size = 16, color = 'currentColor' } = _a, props = tslib.__rest(_a, ["size", "color"]);
    return ({type:'svg',props:{width:size,height:size,viewBox:'0 0 16 16',fill:'none',xmlns:'http://www.w3.org/2000/svg',...props},children:[{type:'path',props:{'fill-rule':'evenodd','clip-rule':'evenodd',d:'M14.6667 0C15.403 0 16 0.596954 16 1.33333V14.6667C16 15.403 15.403 16 14.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667V1.33333C0 0.596953 0.596954 0 1.33333 0H14.6667ZM14.08 7.41734C13.4739 7.78702 12.7618 8 12 8C9.79086 8 8 6.20914 8 4C8 3.23816 8.21298 2.52606 8.58266 1.92H3.25333C2.51695 1.92 1.92 2.51695 1.92 3.25333V8.58266C2.52606 8.21298 3.23816 8 4 8C6.20914 8 8 9.79086 8 12C8 12.7618 7.78702 13.4739 7.41734 14.08H12.7467C13.483 14.08 14.08 13.483 14.08 12.7467V7.41734ZM6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12ZM14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z',fill:color}}]});
}

exports["default"] = DefaultIcon;