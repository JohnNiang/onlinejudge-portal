function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/**
 * time ago
 * @param {*} time
 */
export function timeAgo(time) {
  const between = (Date.now() - Number(time)) / 1000
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function toPercentage(lower, higher) {
  if (higher === 0) {
    return 0
  }
  return parseInt((lower / higher * 100).toFixed(0))
}

export function toThousandsFilter(num) {
  return (+num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
