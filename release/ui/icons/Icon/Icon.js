'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var Icon$1 = require('./Icon.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Icon$1["default"]);
const iconsValues = {
    cant: '\\e806',
    cross: '\\e808',
    edit: '\\e801',
    gear: '\\e809',
    gift: '\\e818',
    location: '\\e800',
    logout: '\\e803',
    loupe: '\\e810',
    menu: '\\e80c',
    minus: '\\e805',
    plus: '\\e80f',
    tg: '\\e804',
    truck: '\\e819',
    user: '\\e80d',
    viber: '\\e80a',
    vk: '\\e807',
    whatsapp: '\\e802',
};
const icons = Object.keys(iconsValues);
function Icon(_a) {
    var { icon, style = '', size, color = 'inherit', end } = _a, props = tslib.__rest(_a, ["icon", "style", "size", "color", "end"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const styleProp = () => {
        const currentSize = dom.use(size);
        const currentColor = dom.use(color);
        const sizeStyle = currentSize ? `--ui-icon-size:${currentSize}px;` : '';
        const colorStyle = `--ui-icon-color:${currentColor};`;
        return `--ui-icon:'${iconsValues[icon]}';${sizeStyle}${colorStyle}${dom.use(style)}`;
    };
    return ({type:'span',props:{...props,class:classes__default["default"]([
            styles.root,
            end && styles.end,
        ]),style:styleProp},children:[children]});
}

exports.Icon = Icon;
exports.icons = icons;
exports.iconsValues = iconsValues;
