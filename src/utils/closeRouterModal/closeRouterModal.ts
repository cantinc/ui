import { history, parsedSearch, stringifySearch } from '@innet/dom'

function removeModal (search: any) {
  if (!('modal' in search)) return

  const { modal, ...rest } = search

  if (!Array.isArray(modal)) {
    const result = stringifySearch(rest)
    history.push(result ? `?${result}` : history.path, -1)
    return
  }

  const newModal = modal.slice(0, -1)

  const result = stringifySearch({
    ...rest,
    modal: newModal.length > 1 ? newModal : newModal[0],
  })

  history.push(result ? `?${result}` : history.path, -1)
}

export function closeRouterModal () {
  removeModal(parsedSearch.value)
}

export function getCloseRouterModal (rest?: string[]) {
  if (!rest) {
    return closeRouterModal
  }

  return () => {
    const search = { ...parsedSearch.value }

    for (let i = 0; i < rest.length; i++) {
      delete search[rest[i]]
    }

    removeModal(search)
  }
}
