'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var markdownToAst = require('@textlint/markdown-to-ast');
require('../../external/Highlight/index.js');
require('../Divider/index.js');
require('../Title/index.js');
var Title = require('../Title/Title.js');
var Divider = require('../Divider/Divider.js');
var Highlight = require('../../external/Highlight/Highlight.js');

const astMap = {
    Document: ({ children }) => children.map(ast2jsx),
    Paragraph: ({ children }) => ({
        type: 'p',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    Str: ({ value }) => value,
    Link: ({ url, children }) => ({
        type: 'a',
        props: {
            href: url,
        },
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    List: ({ children, ordered }) => ({
        type: ordered ? 'ol' : 'ul',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    ListItem: ({ children }) => ({
        type: 'li',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    Header: ({ children, depth }) => {
        const jsxChildren = children === null || children === void 0 ? void 0 : children.map(ast2jsx);
        const text = (jsxChildren === null || jsxChildren === void 0 ? void 0 : jsxChildren.length) === 1 && typeof jsxChildren[0] === 'string' ? jsxChildren[0] : undefined;
        return ({
            type: Title.Title,
            props: { h: depth, title: text },
            children: text ? undefined : jsxChildren,
        });
    },
    HorizontalRule: () => ({
        type: Divider.Divider,
    }),
    Strong: ({ children }) => ({
        type: 'strong',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    Emphasis: ({ children }) => ({
        type: 'em',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    Delete: ({ children }) => ({
        type: 's',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    BlockQuote: ({ children }) => ({
        type: 'blockquote',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    Code: ({ value }) => ({
        type: 'code',
        children: value,
    }),
    CodeBlock: ({ value, lang }) => lang
        ? ({
            type: Highlight.Highlight,
            props: {
                code: value,
                language: lang,
            },
        })
        : ({
            type: 'pre',
            props: {
                class: 'language-',
            },
            children: [value],
        }),
    Image: ({ alt, url }) => ({
        type: 'img',
        props: {
            alt,
            src: url,
        },
    }),
    Table: ({ children }) => ({
        type: 'table',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    TableHeader: ({ children }) => ({
        type: 'th',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    TableRow: ({ children }) => ({
        type: 'tr',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
    TableCell: ({ children }) => ({
        type: 'td',
        children: children === null || children === void 0 ? void 0 : children.map(ast2jsx),
    }),
};
function ast2jsx(ast) {
    var _a;
    return (_a = astMap[ast.type]) === null || _a === void 0 ? void 0 : _a.call(astMap, ast);
}
function Markdown({ text }) {
    if (typeof text === 'string') {
        return ast2jsx(markdownToAst.parse(text));
    }
    return (update) => ast2jsx(markdownToAst.parse(text(update)));
}

exports.Markdown = Markdown;
