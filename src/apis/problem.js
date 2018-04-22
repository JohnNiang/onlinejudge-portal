import service from '../utils/service'

const baseUrl = '/api/v1/problems'

const problemApi = {}

problemApi.getProblems = (page, rpp, sort) => {
  return service({
    url: baseUrl,
    params: {
      page: page,
      rpp: rpp,
      sort: sort
    },
    method: 'get'
  })
}

problemApi.getProblem = id => {
  return service({
    url: `${baseUrl}/${id}`,
    method: 'get'
  })
}

problemApi.getProblemLanguages = id => {
  return service({
    url: `${baseUrl}/${id}/languages`,
    method: 'get'
  })
}

problemApi.getSubmissions = problemId => {
  return service({
    url: `${baseUrl}/${problemId}/submissions`,
    method: 'get'
  })
}

problemApi.postSubmission = (problemId, languageId, code) => {
  return service({
    url: `${baseUrl}/${problemId}/submissions/languages/${languageId}`,
    data: {
      code: code
    },
    method: 'post'
  })
}

export default problemApi
