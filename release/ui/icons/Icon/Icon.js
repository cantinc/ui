'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

const iconsImports = {
    default: () => Promise.resolve().then(function () { return require('./icons/DefaultIcon/index.js'); }),
    cross: () => Promise.resolve().then(function () { return require('./icons/CrossIcon/index.js'); }),
    edit: () => Promise.resolve().then(function () { return require('./icons/EditIcon/index.js'); }),
    calendar: () => Promise.resolve().then(function () { return require('./icons/CalendarIcon/index.js'); }),
    chevron: () => Promise.resolve().then(function () { return require('./icons/ChevronIcon/index.js'); }),
    chevronUp: () => Promise.resolve().then(function () { return require('./icons/ChevronUpIcon/index.js'); }),
    menu: () => Promise.resolve().then(function () { return require('./icons/MenuIcon/index.js'); }),
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
