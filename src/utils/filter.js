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

export function toThousands(num) {
  return (+num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if ((time + '').length === 10) {
    time = +time * 1000
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    }
    if (result.lenght > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
