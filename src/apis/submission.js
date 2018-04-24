import service from '../utils/service'

const baseUrl = '/api/v1/submissions'

const submissionApi = {}

submissionApi.getSubmissions = (problemId, pagination) => {
  return service({
    url: `${baseUrl}/problems/${problemId}`,
    params: {
      page: pagination.page,
      rpp: pagination.rpp,
      sort: pagination.sort
    },
    method: 'get'
  })
}

submissionApi.postSubmission = (problemId, languageId, code) => {
  return service({
    url: `${baseUrl}/problems/${problemId}/languages/${languageId}`,
    data: {
      code: code
    },
    method: 'post'
  })
}

submissionApi.getSubmission = submissionId => {
  return service({
    url: `${baseUrl}/${submissionId}`,
    method: 'get'
  })
}

submissionApi.getDataResult = submissionId => {
  return service({
    url: `${baseUrl}/${submissionId}/data_result`,
    method: 'get'
  })
}
export default submissionApi
