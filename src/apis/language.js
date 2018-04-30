import service from '../utils/service'

const baseUrl = '/api/v1/languages'

const languageApi = {}

languageApi.getLanguages = () => {
  return service({
    url: `${baseUrl}/available`,
    method: 'get'
  })
}

export default languageApi
