import { __rest, __awaiter } from 'tslib';

const iconsImports = {
    default: () => import('./icons/DefaultIcon/index.es6.js'),
    cross: () => import('./icons/CrossIcon/index.es6.js'),
    edit: () => import('./icons/EditIcon/index.es6.js'),
    calendar: () => import('./icons/CalendarIcon/index.es6.js'),
    chevron: () => import('./icons/ChevronIcon/index.es6.js'),
    chevronUp: () => import('./icons/ChevronUpIcon/index.es6.js'),
    menu: () => import('./icons/MenuIcon/index.es6.js'),
};
const icons = Object.keys(iconsImports);
function Icon(_a = {}) {
    var { icon = 'default' } = _a, props = __rest(_a, ["icon"]);
    return __awaiter(this, void 0, void 0, function* () {
        const { default: Icon } = yield iconsImports[icon]();
        return {type:Icon,props:{...props}};
    });
}

export { Icon, icons };
