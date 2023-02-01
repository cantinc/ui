import { Ref } from '@innet/dom'
import Mask from 'inputmask'
import { onDestroy } from 'watch-state'

import { useChildrenProvider } from '../../../hooks'
import { Input, type InputProps } from '../Input'

export interface InputMaskProps extends InputProps {
  mask: Mask.Options | string | string[]
}

const defaultMask: Mask.Options = {
  showMaskOnHover: false,
}
export function * InputMask ({
  mask,
  inputRef = new Ref(),
  ...props
}: InputMaskProps) {
  const withChildren = useChildrenProvider()
  yield withChildren(<Input inputRef={inputRef} {...props} />)

  if (typeof mask === 'string' || Array.isArray(mask)) {
    mask = {
      mask,
      ...defaultMask,
    }
  } else {
    mask = {
      ...defaultMask,
      ...mask,
    }
  }

  if (inputRef.value) {
    const maskInstance = Mask(mask).mask(inputRef.value)

    onDestroy(() => maskInstance.remove())
  }
}
