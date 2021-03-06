import { format, formatDistance } from 'date-fns'
import { enUS, zhCN } from 'date-fns/locale'

import { Locale } from 'types'

export type DateType = Date | string | number

export const dateFormat = (date: DateType, f: string = 'YYYY-MM-DD') =>
  format(date, f)

const locales = {
  [Locale.EN]: enUS,
  [Locale.ZH]: zhCN,
}

export const timeAgo = (date: DateType, locale: Locale = Locale.EN) =>
  formatDistance(date, Date.now(), {
    locale: locales[locale],
  })

export const now =
  typeof performance === 'undefined' || !performance.now
    ? Date.now
    : performance.now.bind(performance)
