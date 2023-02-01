import { history } from '@innet/dom'

import { ToggleBar, type ToggleBarItemOptions, type ToggleBarProps, type ToggleBarValue } from '../../interaction'

export interface SearchToggleBarProps extends Pick<ToggleBarProps, 'values'> {
  key: string
  [key: string]: any
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
      value={() => history.getSearch(key) || ''}
      element='nav'
      renderValue={defaultSearchToggleBarRender}
    />
  )
}
