import * as filter from './filter'

const util = {}

Object.keys(filter).forEach(key => {
  util[key] = filter[key]
})

util.getFilename = filename => {
  // get dot index
  const dtoIndex = filename.lastIndexOf('.')
  return filename.split(dtoIndex, 1)
}

export default util
