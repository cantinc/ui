import { parsedSearch, stringifySearch } from '@innet/dom'
import { type IStringifyOptions } from 'qs'

const options: IStringifyOptions = {
  indices: false,
}

export function withoutModal (modal: string, rest?: any) {
  const search = parsedSearch.value
  const oldModal = search.modal

  if (Array.isArray(oldModal)) {
    return stringifySearch({
      ...search,
      ...rest,
      // @ts-expect-error TODO
      modal: oldModal.filter((val: any) => val !== modal),
    }, options)
  }

  return stringifySearch({
    ...search,
    ...rest,
    modal: undefined,
  }, options)
}
