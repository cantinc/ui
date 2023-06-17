import { parsedSearch } from '@innet/dom'

import { ToggleBar, type ToggleBarItemOptions, type ToggleBarProps, type ToggleBarValue } from '../../interaction'

export interface SearchToggleBarProps extends ToggleBarProps {
  key: string
}

export function SearchToggleBar ({
  key,
  ...props
}: SearchToggleBarProps) {
  function defaultSearchToggleBarRender ({ value, label }: ToggleBarValue, { className, onfocus, onblur }: ToggleBarItemOptions) {
    return (
      <a
        onfocus={onfocus}
        onblur={onblur}
        onmouseenter={onfocus}
        onmousedown={(e: MouseEvent) => {
          e.preventDefault()
        }}
        class={className as any}
        scrollTo={-1}
        href={value ? `?${key}=${value}` : '?'}>
        {label ?? value}
      </a>
    )
  }

  return (
    <ToggleBar
      {...props}
      value={() => String(parsedSearch.value[key]) || ''}
      element='nav'
      renderValue={defaultSearchToggleBarRender}
    />
  )
}
