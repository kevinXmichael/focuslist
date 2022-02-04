export function isOlderThan1Day(todoDate) {
  return isOlderThanDays(1, todoDate)
}

export function isOlderThan2Days(todoDate) {
  return isOlderThanDays(2, todoDate)
}

function isOlderThanDays(days_ = 1, date) {
  const today = new Date()
  const days = 1000 * 60 * 60 * 24 * days_
  const dateDiff = Math.abs(today - new Date(date))
  const olderThan1Day = dateDiff >= days
  return olderThan1Day
}
