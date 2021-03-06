import axios from 'axios'
import Vue from 'vue'
import { Translations, Translator } from 'vue-translator'

import { Locale } from 'types'
import { DEFAULT_LOCALE, LOCALES } from 'utils'

enum Placehodler {
  TITLE = 'title',
  CONTENT = 'content',
}

const titlePlaceholder = (locale: string) => ({
  locale,
  value: `[${locale}]`,
})

const contentPlaceholder = (locale: string) => ({
  locale,
  value: `<p>[${locale}]</p>`,
})

const allPlacehodlers = {
  [Placehodler.TITLE]: LOCALES.map(titlePlaceholder),
  [Placehodler.CONTENT]: LOCALES.map(contentPlaceholder),
}

const endPlacehodlers = {
  [Placehodler.TITLE]: titlePlaceholder('_end_').value,
  [Placehodler.CONTENT]: contentPlaceholder('<em>end</em>').value,
}

export interface Translate {
  (template: string, type?: boolean): string
  cache?: TranslateCache
  loading?: boolean
}

export interface TranslateCacheData {
  [key: string]: string
}

export interface TranslateCache {
  extract: () => TranslateCacheData
  prefetch: () => Promise<void>
}

/**
 * DSL:
 *
 * title: header [en] title [zh] 标题 [_end_] footer
 *
 * content:
 * ```
 * header
 *
 * [en]
 *
 * Wait for update
 *
 * [zh]
 *
 * 等待更新
 *
 * [_end_]
 *
 * footer
 * ```
 */
export const createTranslate = (
  translator: Translator = Vue.translator,
): Translate => {
  const cacheData: TranslateCacheData =
    (!__SERVER__ && window.__TRANSLATE_CACHE__) || {}
  const storages: Array<Promise<void>> = []

  const instance: Translate = (template, type = true) => {
    const placehodler = type ? Placehodler.TITLE : Placehodler.CONTENT
    const placehodlers = allPlacehodlers[placehodler]

    let startIndex

    placehodlers.some(({ value }) => {
      startIndex = template.indexOf(value)
      return startIndex !== -1
    })

    if (startIndex === -1) {
      return template
    }

    const start = template.substring(0, startIndex)

    const endIndex = template.indexOf(endPlacehodlers[placehodler])

    const hasEnd = endIndex !== -1

    const end = hasEnd
      ? template.substr(endIndex + endPlacehodlers[placehodler].length)
      : ''

    const main = hasEnd
      ? template.substring(startIndex, endIndex)
      : template.substr(startIndex)

    const indexes: Array<{
      locale: Locale
      placehodler: string
      index: number
    }> = []

    placehodlers.forEach(item => {
      const index = main.indexOf(item.value)
      if (index !== -1) {
        indexes.push({
          locale: item.locale as Locale,
          placehodler: item.value,
          index,
        })
      }
    })

    indexes.sort((x, y) => x.index - y.index)

    const translations: Translations = {}

    let firstLocale: string
    let firstTranslation: string

    indexes.forEach((item, index) => {
      const itemIndex = item.index + item.placehodler.length
      const translation =
        index === indexes.length - 1
          ? main.substr(itemIndex)
          : main.substring(itemIndex, indexes[index + 1].index)

      if (!index) {
        firstLocale = item.locale
        firstTranslation = translation
      }

      translations[item.locale] = translation
    })

    const locale = translator.locale as Locale

    let body = translations[locale] || translations[DEFAULT_LOCALE]

    if (body == null) {
      body = cacheData[main]

      if (!body) {
        body = cacheData[main] =
          translator('translating') + translator('ellipsis')

        instance.loading = true

        const storage = axios
          .get('/translate', {
            params: {
              source: firstLocale,
              sourceText: firstTranslation,
            },
          })
          .then(({ data: { targetText, text } }) => {
            cacheData[main] = targetText || text
          })

        storages.push(storage)
      }
    }

    return start + (body || firstTranslation) + end
  }

  instance.cache = {
    extract: () => cacheData,
    prefetch: () =>
      Promise.all(storages).then(() => {
        storages.length = 0
        instance.loading = false
      }),
  }

  Vue.util.defineReactive(instance, 'loading', false)

  return instance
}

export const translate = __SERVER__ ? null : createTranslate()

Object.defineProperty(
  Vue.prototype,
  '$tt',
  __SERVER__
    ? {
        configurable: __DEV__,
        get() {
          return this.$ssrContext.translate
        },
      }
    : { value: translate, writable: __DEV__ },
)
