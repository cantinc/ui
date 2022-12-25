import { __rest } from 'tslib';
import { style, use } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import modules_e7b1950f from './Icon.scss.es6.js';

const useStyle = style(modules_e7b1950f);
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
    var { icon, style = '', size, color = 'inherit', end } = _a, props = __rest(_a, ["icon", "style", "size", "color", "end"]);
    const children = useChildren();
    const styles = useStyle();
    const styleProp = () => {
        const currentSize = use(size);
        const currentColor = use(color);
        const sizeStyle = currentSize ? `--ui-icon-size:${currentSize}px;` : '';
        const colorStyle = `--ui-icon-color:${currentColor};`;
        return `--ui-icon:'${iconsValues[icon]}';${sizeStyle}${colorStyle}${use(style)}`;
    };
    return ({type:'span',props:{...props,class:classes([
            styles.root,
            end && styles.end,
        ]),style:styleProp},children:[children]});
}

export { Icon, icons, iconsValues };
