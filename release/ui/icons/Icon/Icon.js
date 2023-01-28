'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

const iconsImports = {
    default: () => Promise.resolve().then(function () { return require('./icons/DefaultIcon/index.js'); }),
    cant: () => Promise.resolve().then(function () { return require('./icons/CantIcon/index.js'); }),
    edit: () => Promise.resolve().then(function () { return require('./icons/EditIcon/index.js'); }),
    calendar: () => Promise.resolve().then(function () { return require('./icons/CalendarIcon/index.js'); }),
    chevron: () => Promise.resolve().then(function () { return require('./icons/ChevronIcon/index.js'); }),
    chevronUp: () => Promise.resolve().then(function () { return require('./icons/ChevronUpIcon/index.js'); }),
    chevronLeft: () => Promise.resolve().then(function () { return require('./icons/ChevronLeftIcon/index.js'); }),
    chevronRight: () => Promise.resolve().then(function () { return require('./icons/ChevronRightIcon/index.js'); }),
    cross: () => Promise.resolve().then(function () { return require('./icons/CrossIcon/index.js'); }),
    info: () => Promise.resolve().then(function () { return require('./icons/InfoIcon/index.js'); }),
    check: () => Promise.resolve().then(function () { return require('./icons/CheckIcon/index.js'); }),
    menu: () => Promise.resolve().then(function () { return require('./icons/MenuIcon/index.js'); }),
    user: () => Promise.resolve().then(function () { return require('./icons/UserIcon/index.js'); }),
    arrow: () => Promise.resolve().then(function () { return require('./icons/ArrowIcon/index.js'); }),
    arrowLeft: () => Promise.resolve().then(function () { return require('./icons/ArrowLeftIcon/index.js'); }),
    geo: () => Promise.resolve().then(function () { return require('./icons/GeoIcon/index.js'); }),
    logout: () => Promise.resolve().then(function () { return require('./icons/LogoutIcon/index.js'); }),
    gear: () => Promise.resolve().then(function () { return require('./icons/GearIcon/index.js'); }),
    brick: () => Promise.resolve().then(function () { return require('./icons/BrickIcon/index.js'); }),
    plus: () => Promise.resolve().then(function () { return require('./icons/PlusIcon/index.js'); }),
    loupe: () => Promise.resolve().then(function () { return require('./icons/LoupeIcon/index.js'); }),
    delivery: () => Promise.resolve().then(function () { return require('./icons/DeliveryIcon/index.js'); }),
    gift: () => Promise.resolve().then(function () { return require('./icons/GiftIcon/index.js'); }),
    qr: () => Promise.resolve().then(function () { return require('./icons/QRIcon/index.js'); }),
    trash: () => Promise.resolve().then(function () { return require('./icons/TrashIcon/index.js'); }),
    vk: () => Promise.resolve().then(function () { return require('./icons/VKIcon/index.js'); }),
    tg: () => Promise.resolve().then(function () { return require('./icons/TGIcon/index.js'); }),
    vb: () => Promise.resolve().then(function () { return require('./icons/VBIcon/index.js'); }),
    wa: () => Promise.resolve().then(function () { return require('./icons/WAIcon/index.js'); }),
};
const icons = Object.keys(iconsImports);
function Icon(_a = {}) {
    var { icon = 'default' } = _a, props = tslib.__rest(_a, ["icon"]);
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const { default: Icon } = yield iconsImports[icon]();
        return {type:Icon,props:{...props}};
    });
}

exports.Icon = Icon;
exports.icons = icons;
