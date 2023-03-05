import { __rest } from 'tslib';
import { style, useShow, useHidden, use } from '@innet/dom';
import { useChildren, useContext } from '@innet/jsx';
import { Cache } from 'watch-state';
import '../../layout/index.es6.js';
import modules_f1b30145 from './Title.scss.es6.js';
import { titleContext, titleSeparatorContext } from '../../layout/Pages/Pages.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_f1b30145);
function Title(_a = {}) {
    var { h = 1, title, subTitle } = _a, props = __rest(_a, ["h", "title", "subTitle"]);
    const children = useChildren();
    const show = useShow();
    const hide = useHidden();
    const contextTitle = useContext(titleContext);
    const titleSeparator = useContext(titleSeparatorContext);
    const styles = useStyle();
    const showSubtitle = subTitle ? new Cache(() => Boolean(use(subTitle))) : null;
    if (h === 1 && (title !== undefined || contextTitle !== undefined)) {
        if (contextTitle) {
            document.title = !title || contextTitle === title ? contextTitle : `${contextTitle}${titleSeparator}${title}`;
        }
        else if (title) {
            document.title = title;
        }
    }
    return ({type:Flex,props:{element:`h${h}`,wrap:true,...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[title,' ',children,{type:'show',props:{state:showSubtitle},children:[{type:'div',props:{class:() => styles.subTitle},children:[subTitle]}]}]});
}

export { Title };
