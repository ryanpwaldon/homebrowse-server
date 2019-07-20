export default function (string) {
  return string.toLowerCase().split(' ').map(word => {
    word = mapType[word] || word
    return word.charAt(0).toUpperCase() + word.substring(1)
  }).join(' ')
}

const mapType = {
  'street': 'st',
  'road': 'rd',
  'avenue': 'ave'
}
