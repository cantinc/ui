function jsxStringifyProps (props?: Record<string, any>): string {
  if (!props) return ''

  let result = ''

  for (const prop in props) {
    const propValue = props[prop]

    if (typeof propValue === 'function') {
      result += ` ${prop}={${propValue}}`
      continue
    }

    if (typeof propValue === 'string') {
      result += ` ${prop}='${propValue}'`
      continue
    }

    if (typeof propValue === 'boolean') {
      if (propValue) {
        result += ` ${prop}`
      } else {
        result += ` ${prop}={false}`
      }
    }
  }

  return result
}

export function jsxStringify (content: any): string {
  if (content === null) return 'null'
  if (typeof content === 'string') return content

  if (Array.isArray(content)) {
    return content.map(jsxStringify).join('\n')
  }

  if (typeof content === 'object') {
    let { type, children, props } = content

    const strProps = jsxStringifyProps(props)

    if (typeof type === 'function') {
      type = type.name
    }

    if (typeof type === 'string') {
      if (children) {
        return `<${type}${strProps}>
  ${jsxStringify(children).replaceAll('\n', '\n  ')}
</${type}>`
      } else {
        return `<${type}${strProps} />`
      }
    }
  }

  return ''
}
