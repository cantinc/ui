import { Ref, StateProp, style, use } from '@innet/dom'
import { onDestroy, State, Watch } from 'watch-state'

import { actionProp } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import styles from './Slides.scss'

const useStyle = style(styles)

export type Slide<E extends HTMLElement = HTMLElement> = FlexProps<E, {
  children?: any
}>

export interface SlidesProps extends Omit<FlexProps, 'onchange'> {
  slides: Slide[]
  value?: StateProp<number>
  slideProps?: Slide
  onchange?: (value: number) => void
}

export function * Slides ({
  slides,
  vertical,
  value = new State(0),
  onchange,
  ref = new Ref<HTMLDivElement>(),
  onscroll,
  slideProps,
  ...props
}: SlidesProps) {
  const styles = useStyle()
  let scrolled = false
  let changedByScroll = false
  const ready = new State(false)

  onchange = actionProp(value, onchange)

  for (const slide of slides) {
    if (!slide.ref) {
      slide.ref = new Ref<HTMLElement>()
    }
  }

  yield (
    <Flex
      {...props}
      ref={ref}
      vertical={vertical}
      onscroll={(e: Event) => {
        scrolled = true
        ;(onscroll as any)?.(e)
      }}
      class={() => [
        styles.root,
        vertical && styles.vertical,
        ready.value && styles.ready,
      ]}>
      {slides.map(({ children, ...props }) => (
        <Flex {...slideProps} {...props} class={() => styles.slide}>
          {children}
        </Flex>
      ))}
    </Flex>
  )

  const observer = new IntersectionObserver(entries => {
    if (!scrolled) return

    for (const entry of entries) {
      if (entry.isIntersecting) {
        const index = slides.findIndex(({ ref }) => ref?.value === entry.target)

        if (use(value) !== index) {
          changedByScroll = true
          onchange?.(index)
        }
      }
    }
  }, {
    root: ref?.value,
    rootMargin: '0px',
    threshold: 1.0,
  })

  onDestroy(() => {
    observer.disconnect()
  })

  for (const slide of slides) {
    observer.observe((slide.ref as any).value)
  }

  new Watch(() => {
    const currentValue = use(value)

    if (changedByScroll) {
      changedByScroll = false
      return
    }

    if (ref.value) {
      const rootElement = ref.value
      const currentSlide = slides[currentValue]
      const slide = currentSlide?.ref?.value

      if (slide) {
        rootElement.scrollTo(slide.offsetLeft, slide.offsetTop)
      }
    }
  })

  setTimeout(() => {
    ready.value = true
  })
}
