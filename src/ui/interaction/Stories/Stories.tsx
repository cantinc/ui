import { Ref, style } from '@innet/dom'
import { State, Watch } from 'watch-state'

import { Icon } from '../../icons'
import { Flex, FlexProps, Image, ImageProps } from '../../layout'
import { Popout } from '../../popups'
import { Dots } from '../Dots'
import { Slide, Slides } from '../Slides'
import styles from './Stories.scss'

const useStyle = style(styles)

export interface Story extends Slide {
  preview: string
  slides: string[]
  previewRef?: Ref<HTMLElement>
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
  const popoutRoot = new Ref<HTMLDivElement>()
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

        if (popoutRoot.value) {
          popoutRoot.value.style.setProperty('background-image', `url("${stories[currentValue].preview}")`)
        }

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

  const show = () => {
    state.value = true
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
        '--ui-stories-story-image': () => Math.abs(story.value - index) < 3 ? `url("${slides[currentProgress.value]}")` : '',
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
        {stories.map(({ preview, previewRef }, index) => (
          <Image
            size={110}
            radius={previewProps?.size || 110}
            {...previewProps}
            ref={previewRef}
            src={preview}
            class={() => styles.preview}
            onclick={() => {
              story.value = index
              show()
            }}
          />
        ))}
      </Flex>
      <Popout
        class={{ content: () => styles.popoutContent }}
        ontouchstart={stopAutoscroll}
        ontouchend={continueAutoscroll}
        rootRef={popoutRoot}
        align='stretch'
        vertical
        show={state}
        element={popoutElement}>
        <Slides
          gap={16}
          align='stretch'
          value={story}
          class={{
            root: () => styles.slides,
            slide: () => styles.slide,
          }}
          flex
          slides={slides}
        />
        <Icon
          class={() => styles.close}
          icon='cross'
          size={24}
          onclick={hide}
        />
      </Popout>
    </>
  )
}
