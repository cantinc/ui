import { type Context, ContextProvider } from '@innet/jsx'

import { type UITranslations, uiTranslationsContext } from '../../../hooks'

export interface UISettingsProps {
  translations?: UITranslations
  children: JSX.Element
}

export function UISettings ({ translations, children }: UISettingsProps) {
  const contexts: Context[] = []
  const values: any[] = []

  if (translations) {
    contexts.push(uiTranslationsContext)
    values.push(translations)
  }

  if (!contexts.length) return children

  return <ContextProvider children={children} for={contexts} set={values} />
}
