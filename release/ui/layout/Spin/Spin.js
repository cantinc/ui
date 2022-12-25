'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
require('../Flex/index.js');
var Spin$1 = require('./Spin.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyle = dom.style(Spin$1["default"]);
function Spin(props) {
    const styles = useStyle();
    const show = dom.useShow();
    const hide = dom.useHidden();
    return ({type:Flex.Flex,props:{gap:8,...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[{type:'div',props:{class:styles.point}},{type:'div',props:{class:styles.point}},{type:'div',props:{class:styles.point}}]});
}

exports.Spin = Spin;
