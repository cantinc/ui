import { __rest } from 'tslib';
import { Ref, statePropToWatchProp } from '@innet/dom';
import classes from 'html-classes';
import Prism from 'prismjs';
import modules_ca773f94 from './Highlight.scss.es6.js';

function* Highlight(_a) {
    var { ref = new Ref(), code, language } = _a, props = __rest(_a, ["ref", "code", "language"]);
    yield ({type:'pre',props:{...props,class:() => classes([
            `language-${language}`,
            modules_ca773f94.root,
            statePropToWatchProp(props.class),
        ]),ref:ref}});
    if ((ref === null || ref === void 0 ? void 0 : ref.value) && language in Prism.languages) {
        ref.value.innerHTML = Prism.highlight(code, Prism.languages[language], language);
    }
}

export { Highlight };
