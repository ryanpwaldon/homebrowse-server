import * as numeral from 'numeral'
import e = require('cors')

export default function (value) {
  if (typeof value === 'string') {
    const numberMatches = value.match(/\$(\d+(?:\.\d+)?(?:,)?)+(?:k|K|m|M)?/g)
    if (numberMatches) {
      if (numberMatches.length === 1) return formatNumber(numberMatches[0])
      if (numberMatches.length === 2) return formatNumber(numberMatches[0]) + ' - ' + formatNumber(numberMatches[1])
    } else {
      if (value.toLowerCase().includes('auction')) return 'Auction'
      else return ''
    }
  }
  if (typeof value === 'number') {
    return value.toString()
  }
  return ''
}

function formatNumber (str) {
  const instance = numeral(str.toLowerCase())
  if (instance.value() >= 1000000) return instance.format('$0.[00]a')
  if (instance.value() >= 100000) return instance.format('$0.[0]a')
  return instance.format('$0.[00]a')
}
