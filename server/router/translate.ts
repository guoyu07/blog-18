import axios from 'axios'
import crypto from 'crypto'
import googleTranslateAPI from 'google-translate-api'
import { Middleware } from 'koa'
import qs from 'qs'

import { LOCALE_COOKIE, Locale, TOGGLE_LOCALE } from 'utils'

const {
  GOOGLE_TRANSLATE_ENABLED: googleTranslateEnabled,
  TENCENT_TRANSLATE_API_SECRET_ID: SecretId,
  TENCENT_TRANSLATE_API_SECRET_KEY: SecretKey,
} = process.env

const SIGNATURE_PREFIX = 'GETtmt.api.qcloud.com/v2/index.php?'

const COMMON_PARAMS = {
  Action: 'TextTranslate',
  Region: 'ap-shanghai',
  SecretId,
  SignatureMethod: 'HmacSHA256',
}

interface TranslateParams {
  source: Locale
  sourceText: string
}

const getTranslatePrams = (params: TranslateParams) => ({
  ...COMMON_PARAMS,
  Timestamp: Math.ceil(Date.now() / 1000),
  Nonce: Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER),
  ...params,
  target: TOGGLE_LOCALE[params.source],
})

const alphabeticalSort = (a: string, b: string) => (a > b ? 1 : a < b ? -1 : 0)

const GoogleTranslateLocales: {
  [key: string]: string
} = {
  zh: 'zh-cn',
  en: 'en',
}

const translate: Middleware = async (ctx, next) => {
  const { query: { source, sourceText } } = ctx

  if (!sourceText) {
    return
  }

  if (googleTranslateEnabled) {
    const translated = await googleTranslateAPI(sourceText, {
      from: GoogleTranslateLocales[source],
      to: TOGGLE_LOCALE[source as Locale],
    })
    ctx.body = Object.assign(translated, {
      text: translated.text.replace(/<\/ ([^<>]+)>/g, '</$1>'),
    })
    return
  }

  const translateParams = getTranslatePrams({
    source: source || (ctx.cookies.get(LOCALE_COOKIE) as Locale),
    sourceText,
  })

  const Signature = crypto
    .createHmac('sha256', SecretKey)
    .update(
      SIGNATURE_PREFIX +
        qs.stringify(translateParams, {
          encode: false,
          sort: alphabeticalSort,
        }),
    )
    .digest('base64')

  const { data } = await axios.get('https://tmt.api.qcloud.com/v2/index.php', {
    params: Object.assign(translateParams, { Signature }),
  })

  const targetText = data.targetText as string

  ctx.body = {
    ...data,
    targetText:
      targetText &&
      targetText.replace(/\<([^<>]+)\>/g, (matched, $0: string) => {
        $0 = $0
          .toLowerCase()
          .replace(/ /g, '')
          .replace(/\/+/g, '/')
        const index = $0.indexOf('/')
        if (index !== -1) {
          $0 = $0.substr(index)
        }
        return '<' + $0 + '>'
      }),
  }
}

export default translate