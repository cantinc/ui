import { type StateProp, use } from '@innet/dom'
import { type JSXElement } from '@innet/jsx'
import { type ASTNodeTypes, type TxtNode } from '@textlint/ast-node-types'
import { parse } from '@textlint/markdown-to-ast'

import { Highlight } from '../../external/Highlight'
import { Divider } from '../../typography/Divider'
import { Title } from '../Title'

export interface MarkdownProps {
  text: StateProp<string>
}

const astMap: Partial<Record<ASTNodeTypes | string, (node: TxtNode) => Partial<JSXElement>>> = {
  Document: ({ children }) => children.map(ast2jsx),
  Paragraph: ({ children }) => ({
    type: 'p',
    children: children?.map(ast2jsx),
  }),
  Str: ({ value }) => value,
  Link: ({ url, children }) => ({
    type: 'a',
    props: {
      href: url,
    },
    children: children?.map(ast2jsx),
  }),
  List: ({ children, ordered }) => ({
    type: ordered ? 'ol' : 'ul',
    children: children?.map(ast2jsx),
  }),
  ListItem: ({ children }) => ({
    type: 'li',
    children: children?.map(ast2jsx),
  }),
  Header: ({ children, depth }) => {
    const jsxChildren = children?.map(ast2jsx)
    const text = jsxChildren?.length === 1 && typeof jsxChildren[0] === 'string' ? jsxChildren[0] : undefined

    return ({
      type: Title,
      props: { h: depth, title: text },
      children: text ? undefined : jsxChildren,
    })
  },
  HorizontalRule: () => ({
    type: Divider,
  }),
  Strong: ({ children }) => ({
    type: 'strong',
    children: children?.map(ast2jsx),
  }),
  Emphasis: ({ children }) => ({
    type: 'em',
    children: children?.map(ast2jsx),
  }),
  Delete: ({ children }) => ({
    type: 's',
    children: children?.map(ast2jsx),
  }),
  BlockQuote: ({ children }) => ({
    type: 'blockquote',
    children: children?.map(ast2jsx),
  }),
  Code: ({ value }) => ({
    type: 'code',
    children: value,
  }),
  CodeBlock: ({ value, lang }) => lang
    ? ({
        type: Highlight,
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
    children: children?.map(ast2jsx),
  }),
  TableHeader: ({ children }) => ({
    type: 'th',
    children: children?.map(ast2jsx),
  }),
  TableRow: ({ children }) => ({
    type: 'tr',
    children: children?.map(ast2jsx),
  }),
  TableCell: ({ children }) => ({
    type: 'td',
    children: children?.map(ast2jsx),
  }),
}

function ast2jsx (ast: TxtNode) {
  return astMap[ast.type as ASTNodeTypes]?.(ast)
}

export function Markdown ({ text }: MarkdownProps) {
  if (typeof text === 'string') {
    return ast2jsx(parse(text))
  }

  return (update: boolean) => ast2jsx(parse(use(text, update)))
}
