import { type StateProp } from '@innet/dom'
import { Context, useContext } from '@innet/jsx'

export const uiDefaultTranslations = {
  'date-picker_go-back': 'Go back',
  'date-picker_today': 'Today',
  upload_drag: 'Move the file here',
  upload_drop: 'Drop the file here',
} as const satisfies Record<string, StateProp<string>>

export type UITranslationKey = keyof typeof uiDefaultTranslations

export type UITranslations = Record<UITranslationKey, StateProp<string>>

type GetArray<T extends ReadonlyArray<UITranslationKey>> = {
  [K in keyof T]: StateProp<string>
}

export const uiTranslationsContext = new Context<Record<UITranslationKey, StateProp<string>>>(uiDefaultTranslations)

export function useUITranslations<T extends ReadonlyArray<UITranslationKey>> (
  ...keys: T
): GetArray<T> {
  const translations = useContext(uiTranslationsContext) as unknown as Record<UITranslationKey, StateProp<string>>

  const result: Array<StateProp<string>> = []

  for (let i = 0; i < keys.length; i++) {
    result.push(translations[keys[i]])
  }

  return result as GetArray<T>
}
