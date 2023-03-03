import { __rest } from 'tslib';
import { style, useShow, useHidden } from '@innet/dom';
import { useChildren, useContext } from '@innet/jsx';
import '../../layout/index.es6.js';
import modules_f1b30145 from './Title.scss.es6.js';
import { titleContext, titleSeparatorContext } from '../../layout/Pages/Pages.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_f1b30145);
function Title(_a = {}) {
    var { h = 1, text } = _a, props = __rest(_a, ["h", "text"]);
    const children = useChildren();
    const show = useShow();
    const hide = useHidden();
    const contextTitle = useContext(titleContext);
    const titleSeparator = useContext(titleSeparatorContext);
    const styles = useStyle();
    if (h === 1 && (text !== undefined || contextTitle !== undefined)) {
        if (contextTitle) {
            document.title = !text || contextTitle === text ? contextTitle : `${contextTitle}${titleSeparator}${text}`;
        }
        else if (text) {
            document.title = text;
        }
    }
    return ({type:Flex,props:{element:`h${h}`,...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[text,' ',children]});
}

export { Title };
