import { JSXElement } from '@innet/jsx'
import { ASTNodeTypes, TxtNode } from '@textlint/ast-node-types/src'
import { parse } from '@textlint/markdown-to-ast'
import { WatchProp } from 'src/types'

export interface MarkdownProps {
  text: WatchProp<string>
}

const astMap: Partial<Record<ASTNodeTypes, (node: TxtNode) => JSXElement>> = {
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
  Header: ({ children, depth }) => ({
    type: `h${depth}`,
    children: children?.map(ast2jsx),
  }),
  HorizontalRule: () => ({
    type: 'hr',
  }),
  Strong: ({ children }) => ({
    type: 'strong',
    children: children?.map(ast2jsx),
  }),
  Emphasis: ({ children }) => ({
    type: 'em',
    children: children?.map(ast2jsx),
  }),
  BlockQuote: ({ children }) => ({
    type: 'blockquote',
    children: children?.map(ast2jsx),
  }),
  Code: ({ children }) => ({
    type: 'code',
    children: children?.map(ast2jsx),
  }),
  CodeBlock: ({ children }) => ({
    type: 'pre',
    children: children?.map(ast2jsx),
  }),
  Image: ({ alt, url }) => ({
    type: 'img',
    props: {
      alt,
      src: url,
    },
  }),
}

function ast2jsx (ast: TxtNode) {
  return astMap[ast.type as ASTNodeTypes]?.(ast)
}

export function Markdown ({ text }: MarkdownProps) {
  if (typeof text === 'string') {
    return ast2jsx(parse(text))
  }

  return (update: boolean) => ast2jsx(parse(text(update)))
}
