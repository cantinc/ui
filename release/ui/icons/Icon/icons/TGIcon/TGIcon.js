'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

function TGIcon(_a = {}) {
    var { size = 16, color = 'white', color1 = '#2AABEE', color2 = '#229ED9' } = _a, props = tslib.__rest(_a, ["size", "color", "color1", "color2"]);
    return ({type:'svg',props:{width:size,height:size,viewBox:'0 0 16 16',fill:'none',xmlns:'http://www.w3.org/2000/svg',...props},children:[{type:'path',props:{d:'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z',fill:'url(#paint0_linear_791_6066)'}},{type:'path',props:{'fill-rule':'evenodd','clip-rule':'evenodd',d:'M3.84792 7.71224C6.00311 6.77326 7.44024 6.15422 8.15931 5.85514C10.2124 5.00119 10.639 4.85285 10.9171 4.84795C10.9782 4.84687 11.115 4.86203 11.2036 4.9339C11.2783 4.99459 11.2989 5.07657 11.3088 5.13411C11.3186 5.19165 11.3309 5.32273 11.3211 5.42514C11.2099 6.59414 10.7285 9.43098 10.4836 10.7403C10.3799 11.2943 10.1759 11.48 9.97831 11.4982C9.54899 11.5377 9.22299 11.2145 8.80717 10.9419C8.1565 10.5154 7.78891 10.2499 7.15732 9.83368C6.4274 9.35268 6.90058 9.08831 7.31655 8.65626C7.42541 8.54319 9.31701 6.82264 9.35362 6.66656C9.3582 6.64704 9.36245 6.57428 9.31922 6.53585C9.276 6.49743 9.2122 6.51057 9.16616 6.52102C9.1009 6.53583 8.06144 7.22288 6.04778 8.58215C5.75273 8.78475 5.48549 8.88347 5.24605 8.87829C4.98208 8.87259 4.47432 8.72904 4.09685 8.60634C3.63386 8.45585 3.2659 8.37628 3.29794 8.12069C3.31463 7.98756 3.49796 7.85141 3.84792 7.71224Z',fill:color}},{type:'defs',children:[{type:'linearGradient',props:{id:'paint0_linear_791_6066',x1:'8',y1:'0',x2:'8',y2:'15.8813',gradientUnits:'userSpaceOnUse'},children:[{type:'stop',props:{'stop-color':color1}},{type:'stop',props:{offset:'1','stop-color':color2}}]}]}]});
}

exports["default"] = TGIcon;
