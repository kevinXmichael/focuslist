export function isOlderThan1Day(todoDate = new Date()) {
  const today = new Date()
  const oneDay = 1000 * 60 * 60 * 24
  const dateDiff = today - todoDate
  const olderThan1Day = dateDiff >= oneDay
  return olderThan1Day
}
