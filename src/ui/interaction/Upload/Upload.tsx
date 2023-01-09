import { HTMLProps, HTMLStyleProps, inject, LoopItem, Ref, StateProp, style, use, useShow } from '@innet/dom'
import classes from 'html-classes'
import { Cache, State } from 'watch-state'

import { actionProp, getExtension } from '../../../utils'
import { Icon } from '../../icons'
import styles from './Upload.scss'

const useStyle = style(styles)

const imageExtensions = ['jpg', 'webp', 'png', 'jpeg']

export interface UploadValue {
  src: string
  file?: File
}

export interface UploadProps extends Omit<HTMLStyleProps<HTMLInputElement>, 'files' | 'onchange'> {
  width?: StateProp<number>
  height?: StateProp<number>
  radius?: StateProp<number>
  label?: StateProp<string>
  dragText?: StateProp<string>
  dropText?: StateProp<string>
  error?: StateProp<boolean>
  hint?: StateProp<any>
  files?: StateProp<UploadValue[]>
  onchange?: (files: UploadValue[]) => void
  props?: {
    hint?: HTMLProps<HTMLSpanElement>
  }
}

export function Upload ({
  width,
  height,
  radius = 8,
  label,
  dragText,
  dropText,
  error,
  hint,
  style,
  props,
  multiple,
  ref = new Ref(),
  files = new State([]),
  onchange,
  ...rest
}: UploadProps = {}) {
  const styles = useStyle()
  const over = new State(false)

  const empty = new Cache(() => String(!use(files).length))

  onchange = actionProp(files, onchange)

  const handleDragOver = (e: any) => {
    e.preventDefault()
    over.value = true
  }
  const handleDragLeave = () => {
    over.value = false
  }
  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    over.value = false

    if (e.dataTransfer?.files.length && ref.value) {
      ref.value.files = e.dataTransfer.files

      handleInput()
    }

    return false
  }

  const handleInput = () => {
    if (!ref?.value?.files) return

    const result: (Promise<UploadValue> | UploadValue)[] = []

    for (const file of ref.value.files) {
      const ext = getExtension(file)

      if (!imageExtensions.includes(ext)) {
        result.push({
          src: ext,
          file,
        })
      } else {
        result.push(new Promise((resolve, reject) => {
          const fr = new FileReader()
          fr.onload = () => resolve({
            src: String(fr.result),
            file,
          })
          fr.onerror = reject
          fr.readAsDataURL(file)
        }))
      }

      if (!use(multiple)) {
        break
      }
    }

    Promise.all(result).then(newFiles => {
      onchange?.(newFiles)
    })
  }

  const handleClear = (e: Event) => {
    e.preventDefault()

    if (ref.value) {
      ref.value.files = new DataTransfer().files
    }

    onchange?.([])
  }

  const hintContent = inject(hint, hint => hint && (
    <span {...props?.hint} class={() => styles.hint}>
      {hint}
    </span>
  ))

  return (
    <label
      ondragleave={handleDragLeave}
      ondragend={handleDragLeave}
      ondragover={handleDragOver}
      ondrop={handleDrop}
      style={{
        ...style,
        '--ui-upload-radius': inject(radius, radius => radius ? `${radius}px` : ''),
        '--ui-upload-width': inject(width, width => width ? `${width}px` : ''),
        '--ui-upload-height': inject(height, height => height ? `${height}px` : ''),
      }}
      class={() => classes([
        styles.root,
        over.value && styles.over,
        use(error) && styles.error,
      ])}>
      <input
        {...rest}
        multiple={multiple}
        type='file'
        ref={ref}
        data-empty={empty}
        oninput={handleInput}
        class={() => styles.input}
      />
      <span class={() => styles.label}>
        {label}
      </span>
      <span class={() => styles.drag}>
        {dragText}
      </span>
      <span class={() => styles.drop}>
        {dropText}
      </span>
      <span class={() => styles.focus} />
      <for of={files} key='src'>
        {(item: LoopItem<UploadValue>) => {
          const show = useShow(400)
          const hide = new Ref<any>()
          const getClass = () => classes([
            styles.image,
            show.value && styles.imageShow,
            hide.value.value && styles.imageHide,
          ])

          return (
            <delay show={300} ref={hide} hide={300}>
              {item.value.src.length > 10
                ? (
                  <img
                    class={getClass}
                    src={item.value.src}
                  />
                  )
                : (
                  <span class={getClass}>
                    <span class={() => styles.name}>
                      {item.value.file?.name.replace(/\.[^.]+$/, '')}
                    </span>
                    <span class={() => styles.extension}>
                      {item.value.src}
                    </span>
                  </span>
                  )}
            </delay>
          )
        }}
      </for>
      {hintContent}
      <Icon
        icon='cross'
        class={() => styles.clear}
        onclick={handleClear}
      />
    </label>
  )
}
