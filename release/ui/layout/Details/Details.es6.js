import { __rest } from 'tslib';
import { style, Ref, use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import { State } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../icons/index.es6.js';
import modules_d6e4f4b2 from './Details.scss.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Arrow } from '../../icons/Arrow/Arrow.es6.js';

const useStyle = style(modules_d6e4f4b2);
function* Details(_a = {}) {
    var _b;
    var { ref = new Ref(), style = '', open = new State(false), onToggle } = _a, props = __rest(_a, ["ref", "style", "open", "onToggle"]);
    const { '': children, summary } = useSlots();
    const styles = useStyle();
    const height = new State(0);
    let defaultHeight = 0;
    onToggle = actionProp(open, onToggle);
    yield ({type:'details',props:{...props,style:() => `height:${height.value}px;${use(style)}`,ontoggle:(e) => {
            var _a, _b, _c, _d, _e;
            if ((_a = ref.value) === null || _a === void 0 ? void 0 : _a.open) {
                height.value = ((_b = ref.value) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0;
            }
            onToggle === null || onToggle === void 0 ? void 0 : onToggle(((_c = ref.value) === null || _c === void 0 ? void 0 : _c.open) || false);
            (_e = (_d = props).ontoggle) === null || _e === void 0 ? void 0 : _e.call(_d, e);
        },ref:ref,class:() => styles.root},children:[summary && ({type:'summary',props:{onclick:(e) => {
                const element = ref.value;
                if (element === null || element === void 0 ? void 0 : element.open) {
                    e.preventDefault();
                    height.value = defaultHeight;
                    setTimeout(() => {
                        element.open = false;
                    }, 300);
                }
            },class:() => styles.summary},children:[{type:Arrow,props:{class:() => styles.arrow,size:16,direction:() => height.value === defaultHeight ? 'right' : 'down'}},summary]}),' ',children]});
    defaultHeight = ((_b = ref.value) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0;
    height.value = defaultHeight;
}

export { Details };
