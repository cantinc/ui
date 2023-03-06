import { __rest, __asyncGenerator, __await } from 'tslib';
import { inject } from '@innet/dom';
import modules_e7b1950f from './Icon.scss.es6.js';

const iconsImports = {
    default: () => import('./icons/DefaultIcon/index.es6.js'),
    cant: () => import('./icons/CantIcon/index.es6.js'),
    edit: () => import('./icons/EditIcon/index.es6.js'),
    calendar: () => import('./icons/CalendarIcon/index.es6.js'),
    chevron: () => import('./icons/ChevronIcon/index.es6.js'),
    chevronUp: () => import('./icons/ChevronUpIcon/index.es6.js'),
    chevronLeft: () => import('./icons/ChevronLeftIcon/index.es6.js'),
    chevronRight: () => import('./icons/ChevronRightIcon/index.es6.js'),
    cross: () => import('./icons/CrossIcon/index.es6.js'),
    info: () => import('./icons/InfoIcon/index.es6.js'),
    check: () => import('./icons/CheckIcon/index.es6.js'),
    menu: () => import('./icons/MenuIcon/index.es6.js'),
    user: () => import('./icons/UserIcon/index.es6.js'),
    arrow: () => import('./icons/ArrowIcon/index.es6.js'),
    arrowLeft: () => import('./icons/ArrowLeftIcon/index.es6.js'),
    geo: () => import('./icons/GeoIcon/index.es6.js'),
    logout: () => import('./icons/LogoutIcon/index.es6.js'),
    gear: () => import('./icons/GearIcon/index.es6.js'),
    brick: () => import('./icons/BrickIcon/index.es6.js'),
    plus: () => import('./icons/PlusIcon/index.es6.js'),
    minus: () => import('./icons/MinusIcon/index.es6.js'),
    loupe: () => import('./icons/LoupeIcon/index.es6.js'),
    delivery: () => import('./icons/DeliveryIcon/index.es6.js'),
    gift: () => import('./icons/GiftIcon/index.es6.js'),
    qr: () => import('./icons/QRIcon/index.es6.js'),
    trash: () => import('./icons/TrashIcon/index.es6.js'),
    vk: () => import('./icons/VKIcon/index.es6.js'),
    tg: () => import('./icons/TGIcon/index.es6.js'),
    vb: () => import('./icons/VBIcon/index.es6.js'),
    wa: () => import('./icons/WAIcon/index.es6.js'),
};
const icons = Object.keys(iconsImports);
function Icon(_a = {}) {
    var { icon = 'default', size = 14 } = _a, props = __rest(_a, ["icon", "size"]);
    return __asyncGenerator(this, arguments, function* Icon_1() {
        yield yield __await(({type:'span',props:{style:{
                '--ui-icon-size': inject(size, size => `${size}px`),
            },class:modules_e7b1950f.loading}}));
        const { default: Icon } = yield __await(iconsImports[icon]());
        yield yield __await(({type:Icon,props:{...props,size:size}}));
    });
}

export { Icon, icons };
