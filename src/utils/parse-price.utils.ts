import * as numeral from 'numeral'

export default function (value) {
  if (typeof value === 'string') {
    const matches = value.match(/\$(\d+(?:\.\d+)?(?:,)?)+(?:k|K|m|M)?/g)
    if (matches && matches.length === 1) return numeral(matches[0].toLowerCase()).format('$0a')
  }
  if (typeof value === 'number') {
    return value.toString()
  }
  return ''
}