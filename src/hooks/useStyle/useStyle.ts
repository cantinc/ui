import { useProps } from '@innet/jsx'
import classes, { ClassesArgument } from 'html-classes'

export interface Style<S = any> {
  class?: ClassesArgument<keyof S> | Record<keyof S, ClassesArgument<keyof S>>
}

export function getStyles<S> (styles: S, props: any): S {
  if (!props || !props.class) {
    return styles
  }

  if (typeof props.class !== 'object' || Array.isArray(props.class)) {
    const result = { ...styles }
    Object.defineProperty(result, 'root', {
      get () {
        // @ts-expect-error
        return classes([styles.root, props.class])
      },
    })

    return result
  }

  const result = {} as S

  for (const key in styles) {
    Object.defineProperty(result, key, {
      get () {
        return classes([
          styles[key],
          props.class[key],
        ])
      },
    })
  }

  return result
}

export function style<S> (styles: S) {
  return function useStyle (): S {
    const props = useProps()

    return getStyles(styles, props)
  }
}
