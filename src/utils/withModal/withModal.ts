import { parsedSearch, stringifySearch } from '@innet/dom'
import { IStringifyOptions } from 'qs'

const options: IStringifyOptions = {
  indices: false,
}

export function withModal (modal: string, rest?: any) {
  const search = parsedSearch.value
  const oldModal = search.modal

  if (!oldModal) {
    return stringifySearch({
      ...search,
      ...rest,
      modal,
    }, options)
  }

  if (Array.isArray(oldModal)) {
    return stringifySearch({
      ...search,
      ...rest,
      modal: [...oldModal, modal as any],
    }, options)
  }

  return stringifySearch({
    ...search,
    ...rest,
    modal: [oldModal, modal as any],
  }, options)
}
