import { AsyncSpin } from '../../content/AsyncSpin'

export interface AsyncProps<T extends object> {
  import: () => Promise<T>
  name?: keyof T
  props?: any
  children?: any
  showDelay?: number
}

export interface LocalesProp {
  locales: any[]
}

export async function * Async <T extends object> ({
  import: request,
  name,
  props,
  children,
  showDelay = 300,
}: AsyncProps<T>) {
  yield <AsyncSpin flex align='center' justify='center' show={showDelay} />

  const result = await request()
  const Component: any = name ? result[name] : result

  yield (
    <delay show={300}>
      <Component {...props}>
        {children}
      </Component>
    </delay>
  )
}
