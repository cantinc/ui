import { Delay, For, Hide, type HTMLProps, inject, Ref, Show, type StateProp, style, use } from '@innet/dom'
import classes from 'html-classes'
import { Cache, State } from 'watch-state'

import { actionProp, getExtension } from '../../../utils'
import { Icon } from '../../icons'
import { Flex, type FlexProps } from '../../layout'
import styles from './Upload.scss'

const useStyle = style(styles)

const imageExtensions = ['jpg', 'webp', 'png', 'jpeg', 'svg']

export interface UploadFile extends Partial<File> {
  src: string
  name: string
}

export interface UploadProps extends Omit<FlexProps<'label'>, 'files' | 'onchange'> {
  inputRef?: Ref<HTMLInputElement>
  accept?: StateProp<string>
  name?: StateProp<string>
  disabled?: StateProp<boolean>
  width?: StateProp<number | string>
  height?: StateProp<number>
  radius?: StateProp<number>
  label?: StateProp<string>
  error?: StateProp<boolean>
  hint?: StateProp<any>
  multiple?: StateProp<boolean>
  clearable?: StateProp<boolean>
  files?: StateProp<UploadFile[]>
  after?: JSX.Element
  before?: JSX.Element
  onchange?: (files: UploadFile[]) => void
  props?: {
    hint?: HTMLProps<HTMLSpanElement>
    input?: HTMLProps<HTMLInputElement>
  }
}

export function Upload ({
  width,
  height,
  radius = 8,
  label,
  error,
  hint,
  style,
  props,
  multiple,
  inputRef = new Ref(),
  files = new State([]),
  onchange,
  accept,
  name,
  disabled,
  clearable,
  after,
  before,
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

    if (e.dataTransfer?.files.length && inputRef.value) {
      inputRef.value.files = e.dataTransfer.files

      handleInput()
    }

    return false
  }

  const handleInput = () => {
    if (!inputRef?.value?.files) return

    const result: (Promise<UploadFile> | UploadFile)[] = []

    for (const file of inputRef.value.files) {
      const ext = getExtension(file)

      if (!imageExtensions.includes(ext)) {
        // @ts-expect-error: Making the file as UploadFile
        file.src = file.name
        // @ts-expect-error: Making the file as UploadFile
        result.push(file)
      } else {
        result.push(new Promise((resolve, reject) => {
          const fr = new FileReader()
          fr.onload = () => {
            // @ts-expect-error: Making the file as UploadFile
            file.src = String(fr.result)
            // @ts-expect-error: Making the file as UploadFile
            resolve(file)
          }
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

    if (inputRef.value) {
      inputRef.value.files = new DataTransfer().files
    }

    onchange?.([])
  }

  const hintContent = inject(hint, hint => hint && (
    <span {...props?.hint} class={() => styles.hint}>
      {hint}
    </span>
  ))

  return (
    <Flex
      element='label'
      align='center'
      justify='center'
      padding={12}
      gap={12}
      {...rest}
      ondragleave={handleDragLeave}
      ondragend={handleDragLeave}
      ondragover={handleDragOver}
      ondrop={handleDrop}
      style={{
        ...style,
        '--ui-upload-radius': inject(radius, radius => radius ? `${radius}px` : ''),
        '--ui-upload-width': inject(width, width => !width ? '' : typeof width === 'string' ? width : `${width}px`),
        '--ui-upload-height': inject(height, height => height ? `${height}px` : ''),
      }}
      class={() => classes([
        styles.root,
        over.value && styles.over,
        use(error) && styles.error,
      ])}>
      <input
        {...props?.input}
        accept={accept}
        name={name}
        disabled={disabled}
        multiple={multiple}
        type='file'
        ref={inputRef}
        data-empty={empty}
        oninput={handleInput}
        class={() => styles.input}
      />
      <div class={() => styles.labels}>
        <span class={() => styles.label}>
          {label}
        </span>
        <span class={() => styles.drag}>
          <slot name='ui-upload-drag'>
            Move the file here
          </slot>
        </span>
        <span class={() => styles.drop}>
          <slot name='ui-upload-drop'>
            Drop the file here
          </slot>
        </span>
      </div>
      <span class={() => styles.focus} />
      {before}
      <div class={() => styles.files}>
        <For of={files} key='src'>
          {(item) => {
            const hide = new Ref<any>()
            const src = new Cache(() => use(item).src)
            const name = new Cache(() => use(item).name)
            const isImage = new Cache(() => src.value !== name.value)
            const title = new Cache(() => name.value?.replace(/\.[^.]+$/, ''))

            const getClass = () => classes([
              styles.image,
              hide.value.value && styles.imageHide,
            ])

            return (
              <Delay show={300} ref={hide} hide={300}>
                <Hide when={isImage} fallback={<img class={getClass} src={src} />}>
                  <span class={getClass}>
                    <span class={() => styles.name}>
                      {title}
                    </span>
                    <span class={() => styles.extension}>
                      {() => getExtension(use(item))}
                    </span>
                  </span>
                </Hide>
              </Delay>
            )
          }}
        </For>
      </div>
      {after}
      {hintContent}
      <Show when={clearable}>
        <Icon
          icon='cross'
          class={() => styles.clear}
          onclick={handleClear}
        />
      </Show>
    </Flex>
  )
}
