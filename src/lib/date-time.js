const ONE_DAY = 1000 * 60 * 60 * 24

export function isOlderThan1Day(todoDate) {
  return isOlderThanDays(1, todoDate)
}

export function isOlderThan2Days(todoDate) {
  return isOlderThanDays(2, todoDate)
}

function isOlderThanDays(days_ = 1, date) {
  const today = new Date()
  const days = ONE_DAY * days_
  const dateDiff = Math.abs(today - new Date(date))
  const olderThan1Day = dateDiff >= days
  return olderThan1Day
}

export function hoursLeft(date) {
  const dateDiff = Math.abs(Date.now() - new Date(date))
  const hours = Math.round(24 * (1 - dateDiff / ONE_DAY))
  return hours
}
