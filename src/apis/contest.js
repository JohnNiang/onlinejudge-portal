import service from '../utils/service'

const baseUrl = '/api/v1/contests'

export function getContests(page, rpp, sort) {
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

export function getContest(contestId) {
  return service({
    url: `${baseUrl}/${contestId}`,
    method: 'get'
  })
}
