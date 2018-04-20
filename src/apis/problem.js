import service from '../utils/service'

const baseUrl = '/api/v1/problems'

export function getProblems(page, rpp, sort) {
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

export function getProblem(id) {
  return service({
    url: `${baseUrl}/${id}`,
    method: 'get'
  })
}

export function getProblemLanguages(id) {
  return service({
    url: `${baseUrl}/${id}/languages`,
    method: 'get'
  })
}

export function postSubmission(problemId, languageId, code) {
  return service({
    url: `${baseUrl}/${problemId}/submissions/languages/${languageId}`,
    data: {
      code: code
    },
    method: 'post'
  })
}
