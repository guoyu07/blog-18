import { merge } from 'lodash'
import Vue from 'vue'
import VueTranslator from 'vue-translator'

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  Locale,
  TOGGLE_LOCALE,
  getCookie,
} from 'utils'

Vue.use(VueTranslator, {
  defaultLocale: DEFAULT_LOCALE,
  locale: (!__SERVER__ && (getCookie(LOCALE_COOKIE) as Locale)) || undefined,
  merge,
})

const { translator } = Vue

translator.toggleLocale = () => {
  translator.locale = TOGGLE_LOCALE[translator.locale as Locale]
}
