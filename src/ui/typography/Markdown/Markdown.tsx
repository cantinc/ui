import { Link, type StateProp, use } from '@innet/dom'
import {
  type AnyTxtNode,
  type TxtBlockQuoteNode,
  type TxtCodeBlockNode,
  type TxtCodeNode,
  type TxtDeleteNode,
  type TxtDocumentNode,
  type TxtEmphasisNode,
  type TxtHeaderNode,
  type TxtImageNode,
  type TxtLinkNode,
  type TxtListNode,
  type TxtNodeType,
  type TxtParagraphNode,
  type TxtStrNode,
  type TxtStrongNode,
  type TxtTableCellNode,
  type TxtTableNode,
  type TxtTableRowNode,
} from '@textlint/ast-node-types'
import { parse } from '@textlint/markdown-to-ast'

import { Highlight } from '../../external/Highlight'
import { Divider } from '../../typography/Divider'
import { Title } from '../Title'

export interface MarkdownProps {
  text?: StateProp<string>
}

// TODO: change "TxtNodeType | string" to "TxtNodeType"
const astMap: Record<TxtNodeType | string, (node: any) => JSX.Element> = {
  Document: ({ children }: TxtDocumentNode) => children.map(ast2jsx),
  Paragraph: ({ children }: TxtParagraphNode) => ({
    type: 'p',
    props: { children: children?.map(ast2jsx) },
  }),
  Str: ({ value }: TxtStrNode) => value,
  Link: ({ url, children }: TxtLinkNode) => ({
    type: Link,
    props: {
      href: url,
      children: children?.map(ast2jsx),
    },
  }),
  List: ({ children, ordered }: TxtListNode) => ({
    type: ordered ? 'ol' : 'ul',
    props: { children: children?.map(ast2jsx) },
  }),
  ListItem: ({ children }: TxtListNode) => ({
    type: 'li',
    props: { children: children?.map(ast2jsx) },
  }),
  Header: ({ children, depth }: TxtHeaderNode) => {
    const jsxChildren = children?.map(ast2jsx)
    const text = jsxChildren?.length === 1 && typeof jsxChildren[0] === 'string' ? jsxChildren[0] : undefined

    return ({
      type: Title,
      props: { h: depth, title: text, accent: depth < 3, children: text ? undefined : jsxChildren },
    })
  },
  HorizontalRule: () => ({
    type: Divider,
  }),
  Strong: ({ children }: TxtStrongNode) => ({
    type: 'strong',
    props: { children: children?.map(ast2jsx) },
  }),
  Emphasis: ({ children }: TxtEmphasisNode) => ({
    type: 'em',
    props: { children: children?.map(ast2jsx) },
  }),
  Delete: ({ children }: TxtDeleteNode) => ({
    type: 's',
    props: { children: children?.map(ast2jsx) },
  }),
  BlockQuote: ({ children }: TxtBlockQuoteNode) => ({
    type: 'blockquote',
    props: { children: children?.map(ast2jsx) },
  }),
  Code: ({ value }: TxtCodeNode) => ({
    type: 'code',
    props: { children: value },
  }),
  CodeBlock: ({ value, lang }: TxtCodeBlockNode) => lang
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
          children: value,
        },
      }),
  Image: ({ alt, url }: TxtImageNode) => ({
    type: 'img',
    props: {
      alt,
      src: url,
    },
  }),
  Table: ({ children }: TxtTableNode) => ({
    type: 'table',
    props: { children: children?.map(ast2jsx) },
  }),
  TableHeader: ({ children }) => ({
    type: 'th',
    props: { children: children?.map(ast2jsx) },
  }),
  TableRow: ({ children }: TxtTableRowNode) => ({
    type: 'tr',
    props: { children: children?.map(ast2jsx) },
  }),
  TableCell: ({ children }: TxtTableCellNode) => ({
    type: 'td',
    props: { children: children?.map(ast2jsx) },
  }),
}

function ast2jsx (ast: AnyTxtNode) {
  return astMap[ast.type]?.(ast)
}

export function Markdown ({ text }: MarkdownProps) {
  if (!text) return

  if (typeof text === 'string') {
    return ast2jsx(parse(text))
  }

  return (update: boolean) => ast2jsx(parse(use(text, update)))
}
