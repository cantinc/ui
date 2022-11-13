export type UITypes = 'select' | 'text'

export interface UIComponentProp {
  type: UITypes
  values?: string[]
  description?: string
}

export type UIComponent = (props: any) => any

export interface UIMeta<C extends UIComponent> {
  component: C
  props?: Record<keyof Parameters<C>[0], UITypes | UIComponentProp>
  examples?: Record<string, any>
}

export interface ComponentProps <C extends UIComponent> {
  is: () => Promise<{ default: UIMeta<C> }>
}

export function meta <C extends UIComponent> (meta: UIMeta<C>) {
  return meta
}

export async function Component <C extends UIComponent> ({ is }: ComponentProps<C>) {
  const meta = await is()
  console.log(meta.default)
}
