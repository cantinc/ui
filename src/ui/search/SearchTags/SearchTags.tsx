import { parsedSearch, stringifySearch } from '@innet/dom'
import { historyPush, locationPath } from '@watch-state/history-api'

import { Tags, type TagsMultipleProps, type TagsSingleProps } from '../../interaction'

export type SearchTagsProps = (Omit<TagsMultipleProps, 'value'> | Omit<TagsSingleProps, 'value'>) & {
  key: string
}

export function SearchTags ({
  key,
  onchange,
  multiple,
  ...props
}: SearchTagsProps) {
  const handleChange = (val: string | string[]) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: Array.isArray(val) && val.length === 1 ? val[0] : val || undefined,
    }, { addQueryPrefix: true })

    historyPush(`${locationPath.value}${search}`, -1)

    onchange?.(val as any)
  }
  const value: any = (): string | string[] => {
    const val = parsedSearch.value[key] || ''

    if (!Array.isArray(val) && typeof val === 'object') {
      return ''
    }

    if (multiple) {
      if (Array.isArray(val)) {
        return val as string[]
      }

      return val ? [val] : []
    }

    if (Array.isArray(val)) {
      return val[0] as string
    }

    return val
  }

  return (
    <Tags
      {...props}
      multiple={multiple}
      value={value}
      onchange={handleChange as any}
    />
  )
}
