import { Link } from '@innet/dom'
import { getSearchParam } from '@watch-state/history-api'

import { ToggleBar, type ToggleBarItemOptions, type ToggleBarOption, type ToggleBarProps } from '../../interaction'

export interface SearchToggleBarProps extends ToggleBarProps {
  key: string
}

export function SearchToggleBar ({
  key,
  ...props
}: SearchToggleBarProps) {
  function defaultSearchToggleBarRender ({ value, label }: ToggleBarOption, { className, onfocus, onblur }: ToggleBarItemOptions) {
    return (
      <Link
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
      </Link>
    )
  }

  return (
    <ToggleBar
      {...props}
      value={getSearchParam(key)}
      element='nav'
      renderValue={defaultSearchToggleBarRender}
    />
  )
}
