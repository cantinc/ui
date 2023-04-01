import { Ref, type StateProp, style, use } from '@innet/dom'
import { State, Watch } from 'watch-state'

import { Flex, type FlexProps, Image, type ImageProps } from '../../layout'
import { Popout } from '../../popups'
import { Dots } from '../Dots'
import { type Slide, Slides } from '../Slides'
import styles from './Stories.scss'

const useStyle = style(styles)

export interface Story extends Slide {
  preview: string
  slides: string[]
  previewRef?: Ref<HTMLElement>
  unread?: StateProp<boolean>
  onread?: () => void
}

export interface StoriesProps extends FlexProps {
  stories: Story[]
  props?: {
    preview?: ImageProps
  }
}

export function Stories ({
  stories,
  ref = new Ref<HTMLElement>(),
  props: { preview: previewProps } = {},
  ...props
}: StoriesProps) {
  const styles = useStyle()
  const popoutElement = new Ref<HTMLElement>()
  const state = new State<boolean>(false)
  const story = new State<number>()
  const autoscroll = new State<boolean>(true)

  const stopAutoscroll = () => {
    autoscroll.value = false
  }
  const continueAutoscroll = () => {
    autoscroll.value = true
  }

  new Watch(() => {
    const currentValue = story.value
    if (currentValue !== undefined && ref?.value) {
      const currentElement = stories[currentValue].previewRef?.value

      if (currentElement) {
        popoutElement.value = currentElement

        if (ref.value) {
          const x = currentElement.offsetLeft - (ref.value.offsetWidth / 2)
          const y = currentElement.offsetTop - (ref.value.offsetHeight / 2)

          ref.value.scrollTo(x, y)
        }
      }
    }
  })

  for (let i = 0; i < stories.length; i++) {
    if (!stories[i].previewRef) {
      stories[i].previewRef = new Ref()
    }
  }

  const read = () => {
    stories[story.value].onread?.()
  }
  const show = () => {
    state.value = true
    read()
  }
  const hide = () => {
    state.value = false
  }

  const slides = stories.map(({
    preview,
    slides,
    previewRef,
    children,
    style = '',
    onclick,
    unread,
    ref = new Ref<HTMLElement>(),
    ...rest
  }, index): Slide => {
    const currentProgress = new State(0)

    new Watch(() => {
      if (!state.value || story.value !== index) {
        currentProgress.value = 0
      }
    })

    const next = () => {
      if (currentProgress.value < slides.length - 1) {
        currentProgress.value++
      } else if (story.value < stories.length - 1) {
        story.value++
        read()
      } else {
        hide()
      }
    }

    return ({
      align: 'center',
      vertical: true,
      ...rest,
      ref,
      onclick: (e: MouseEvent) => {
        if (e.target === ref?.value) {
          if (e.x < document.body.offsetWidth / 2) {
            if (currentProgress.value > 0) {
              currentProgress.value--
            } else if (story.value > 0) {
              story.value--
              read()
            } else {
              hide()
            }
          } else {
            next()
          }
        }

        ;(onclick as any)?.(e)
      },
      style: {
        'background-image': () => Math.abs(story.value - index) < 3 ? `url("${slides[currentProgress.value]}")` : '',
      },
      children: (
        <>
          <Dots
            size={6}
            progress
            value={currentProgress}
            class={{
              root: () => styles.dots,
              dot: () => styles.dot,
            }}
            onend={next}
            autoscroll={() => story.value === index && autoscroll.value}
            count={slides.length}
          />
          {children}
        </>
      ),
    })
  })

  return (
    <>
      <Flex gap={16} {...props} ref={ref} class={() => styles.root}>
        {stories.map(({ preview, previewRef, unread }, index) => (
          <Image
            size={110}
            radius={previewProps?.size || 110}
            {...previewProps}
            ref={previewRef}
            src={preview}
            class={() => [
              styles.preview,
              use(unread) && styles.unread,
            ]}
            onclick={() => {
              story.value = index
              show()
            }}
          />
        ))}
      </Flex>
      <Popout
        ontouchstart={stopAutoscroll}
        ontouchend={continueAutoscroll}
        align='stretch'
        vertical
        show={state}
        onhide={hide}
        closeButton
        background='var(--color-0)'
        element={popoutElement}>
        <Slides
          gap={16}
          align='stretch'
          value={story}
          onchange={read}
          class={{
            root: () => styles.slides,
            slide: () => styles.slide,
          }}
          flex
          slides={slides}
        />
      </Popout>
    </>
  )
}
