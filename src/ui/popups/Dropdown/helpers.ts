export function isOverflowElement (element: Element): boolean {
  const { overflow, overflowX, overflowY, display } = getComputedStyle(element)

  return (
    /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
    !['inline', 'contents'].includes(display)
  )
}

export function getOverflowParent (node: Node): HTMLElement {
  const parentNode = node.parentNode

  if (node === document.body || !parentNode) return document.body

  if (parentNode instanceof HTMLElement && isOverflowElement(parentNode)) {
    return parentNode
  }

  return getOverflowParent(parentNode)
}
