import { Show } from '@innet/dom'
import { locationHash } from '@watch-state/history-api'
import { Card, Cards, Details, Highlight, Markdown, Page, Typography } from 'src/ui'

import styles from './Component.scss'

export type UITypes = 'select' | 'text' | 'switch'

export interface UIComponentProp {
  type: UITypes
  values?: string[]
  description?: string
}

export type UIComponent = (props: any) => any

export interface UIExample {
  id: string
  example: any
  title?: string
  description?: string
  code?: string
}

export interface ComponentProps <C extends UIComponent> {
  component: C
  name: string
  description?: string
  components?: Record<string, string>
  props?: Record<keyof Parameters<C>[0], UITypes | UIComponentProp>
  examples?: UIExample[]
}

export function example (example: UIExample): UIExample {
  return example
}

export function Component <C extends UIComponent> ({
  component: Component,
  examples,
  props,
  description,
}: ComponentProps<C>) {
  console.log(Component, props)

  return (
    <Page gap={16}>
      <Show when={description}>
        <Typography><Markdown text={description} /></Typography>
      </Show>
      <Show when={examples}>
        <h2>Examples</h2>
        <Cards>
          {examples?.map(({ id, example, title, description, code }) => (
            <Card preventAnimation class={() => [styles.example, locationHash.value === id && styles.active]} vertical id={id} align='stretch'>
              <Show when={title || description}>
                <Typography>
                  {title && <h3><a href={`#${id}`}>{title}</a></h3>}
                  {description && <Markdown text={description} />}
                </Typography>
              </Show>
              <div class={styles.exampleWrapper}>
                {example}
              </div>
              <Show when={code}>
                <Details summary='Code'>
                  <Highlight code={code || ''} language='tsx' />
                </Details>
              </Show>
            </Card>
          ))}
        </Cards>
      </Show>
    </Page>
  )
}
