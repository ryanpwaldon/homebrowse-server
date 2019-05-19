import * as moment from 'moment'

export const datetimeToTimestamp = (datetime, format?) => {
  return moment(datetime, format).format('X')
}

export const datetimeToDisplay = datetime => {
  return moment(datetime).format('D MMM YYYY')
}

export const datetimeToRelative = datetime => {
  return moment(datetime).fromNow()
}
