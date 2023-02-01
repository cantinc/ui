import { type JSXElement, useChildren } from '@innet/jsx'

export function useChildrenProvider () {
  const children = useChildren()

  return (element: JSXElement) => {
    if (children) {
      element.children = children
    }
    return element
  }
}
