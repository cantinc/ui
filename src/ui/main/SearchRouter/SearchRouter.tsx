import { type BaseComponentRoute, type Component, For, isLazy, Lazy, type LazyResult, parsedSearch } from '@innet/dom'
import { Cache } from 'watch-state'

export type SearchBaseRote = BaseComponentRoute & {
  value: string
}

export type SearchRouting = SearchBaseRote[]

export interface SearchRouterProps {
  key: string
  routing: SearchRouting
}

export function SearchRouter ({ key, routing }: SearchRouterProps) {
  const loadedComponents = new Map<LazyResult, Component>()

  const routingMap = new Cache(() => new Map(routing.map(route => [route.value, route])))

  const routes = new Cache(() => {
    const value = parsedSearch.value[key]
    const searchModals = typeof value === 'string'
      ? [value]
      : Array.isArray(value)
        ? value.map(String)
        : []

    if (!searchModals.length) return []

    const values = Array.from(new Set(searchModals))

    return values.map((value) => routingMap.value.get(value) as SearchBaseRote)
  })

  return (
    <For of={routes}>
      {route => (
        <Lazy
          component={() => isLazy(route.value.component) ? route.value.component() : route.value.component}
          fallback={() => route.value.fallback}
          loadedComponents={loadedComponents}
        />
      )}
    </For>
  )
}
