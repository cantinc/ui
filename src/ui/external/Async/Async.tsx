import { AsyncSpin } from '../../layout'

export interface AsyncProps<T extends object> {
  import: () => Promise<T>
  name?: keyof T
  props?: any
  asyncProps?: () => Promise<any>
  children?: any
  showDelay?: number
}

export async function * Async <T extends object> ({
  import: request,
  name,
  props,
  asyncProps,
  children,
  showDelay = 300,
}: AsyncProps<T>) {
  yield <AsyncSpin flex align='center' justify='center' showDelay={showDelay} />

  const [
    result,
    aProps,
  ] = await Promise.all([
    request(),
    asyncProps?.(),
  ])

  const Component: any = name ? result[name] : 'default' in result ? result.default : undefined

  yield Component && (
    <delay show={300}>
      <Component {...props} {...aProps}>
        {children}
      </Component>
    </delay>
  )
}
