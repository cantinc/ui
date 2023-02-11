import { history, parsedSearch, stringifySearch } from '@innet/dom'

import { Tags, type TagsMultipleProps, type TagsSingleProps } from '../../interaction'

export type SearchTagsProps = (Omit<TagsMultipleProps, 'value'> | Omit<TagsSingleProps, 'value'>) & {
  key: string
}

export function SearchTags ({
  key,
  onchange,
  ...props
}: SearchTagsProps) {
  const handleChange = (val: string | string[]) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val || undefined,
    }, { addQueryPrefix: true })

    history.push(`${history.path}${search}`, -1)

    onchange?.(val as any)
  }

  return (
    <Tags
      {...props}
      value={() => parsedSearch.value[key] as any || ''}
      onchange={handleChange as any}
    />
  )
}
