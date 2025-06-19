import { parsedSearch, stringifySearch } from '@innet/dom'
import { type IStringifyOptions, type ParsedQs } from 'qs'

const options: IStringifyOptions = {
  indices: false,
}

export function withoutModal (modal: string, rest?: ParsedQs) {
  const search = parsedSearch.value
  const oldModal = search.modal

  if (Array.isArray(oldModal)) {
    return stringifySearch({
      ...search,
      ...rest,
      modal: oldModal.filter((val: any) => val !== modal),
    }, options)
  }

  return stringifySearch({
    ...search,
    ...rest,
    modal: undefined,
  }, options)
}
