'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var JSXStringify$1 = require('./JSXStringify.scss.js');

const useStyle = dom.style(JSXStringify$1["default"]);
function JSXStringify({ components, functions } = {}) {
    const children = jsx.useChildren();
    const styles = useStyle();
    function propsStringify(props) {
        if (!props)
            return null;
        const result = [];
        for (const prop in props) {
            let content;
            const propValue = props[prop];
            if (propValue === null) {
                content = {type:'span',props:{class:styles.propNull},children:[String(propValue)]};
            }
            else if (typeof propValue === 'function') {
                content = {type:'span',props:{class:styles.propFunc},children:[(functions === null || functions === void 0 ? void 0 : functions.has(propValue)) ? functions.get(propValue) : String(propValue)]};
            }
            else if (typeof propValue === 'string') {
                content = propValue;
            }
            else if (propValue === false) {
                content = 'false';
            }
            else if (typeof propValue === 'number') {
                content = {type:'span',props:{class:styles.propNum},children:[propValue]};
            }
            else if (Array.isArray(propValue)) {
                content = {type:'span',props:{class:styles.propArray},children:[JSON.stringify(propValue)]};
            }
            else if (typeof propValue === 'object') {
                content = {type:'span',props:{class:styles.propObject},children:[JSON.stringify(propValue)]};
            }
            if (typeof propValue === 'string') {
                content = {type:'span',props:{class:styles.propString},children:['\'',content,'\'']};
            }
            else if (propValue !== true) {
                content = {type:'span',props:{class:styles.propBraces},children:['{',content,'}']};
            }
            if (propValue !== true) {
                content = ({type:'span',props:{class:styles.propValue},children:['=',content]});
            }
            result.push({type:'span',props:{class:styles.prop},children:[{type:'span',props:{class:styles.propKey},children:[prop]},content]});
        }
        return result;
    }
    function jsxStringify(content) {
        if (content === null) {
            return ({type:'span',props:{class:styles.nullContent},children:['null']});
        }
        if (typeof content === 'string') {
            return ({type:'span',props:{class:styles.content},children:[content]});
        }
        if (Array.isArray(content)) {
            return content.map(jsxStringify);
        }
        if (typeof content === 'object') {
            let { type, children, props } = content;
            if (typeof type === 'function') {
                if (!(components === null || components === void 0 ? void 0 : components[type.name])) {
                    throw Error(`Add component of ${type.name}`);
                }
                type = components[type.name];
            }
            const propsResult = propsStringify(props);
            if (children) {
                return ({type:'div',props:{class:styles.component},children:[{type:'span',props:{class:styles.start},children:['<',type,propsResult,'>']},{type:'div',props:{class:styles.children},children:[jsxStringify(children)]},{type:'span',props:{class:styles.end},children:['</',type,'>']}]});
            }
            else {
                return ({type:'div',props:{class:styles.component},children:[{type:'span',props:{class:styles.empty},children:['<',type,propsResult,'/>']}]});
            }
        }
    }
    return ({type:'div',props:{class:styles.root},children:[children === null || children === void 0 ? void 0 : children.map(jsxStringify)]});
}

exports.JSXStringify = JSXStringify;
