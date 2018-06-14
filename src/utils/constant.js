const constant = {}

constant.userType = {
  general: {
    value: '普通用户'
  },
  teacher: {
    value: '教师'
  },
  admin: {
    value: '管理员'
  },
  contestant: {
    value: '参赛用户'
  }
}

constant.contestType = {
  'single-player': {
    value: '单人赛',
    tagColor: 'tag-blue'
  },
  'multi-player': {
    value: '多人赛',
    tagColor: 'tag-green'
  }
}

constant.contestStatus = {
  processing: {
    value: '正在进行',
    tagColor: 'tag-blue'
  },
  unprocessed: {
    value: '尚未进行',
    tagColor: 'tag-orange'
  },
  processed: {
    value: '已结束',
    tagColor: 'tag-green'
  },
  deleted: {
    value: '已删除',
    tagColor: 'tag-red'
  }
}

constant.judgeStatus = {
  judged: {
    value: '已评判',
    tagColor: 'tag-green'
  },
  judging: {
    value: '正在评判...',
    tagColor: 'tag-orange'
  },
  failed: {
    value: '评判失败',
    tagColor: 'tag-red'
  }
}

constant.judgeResult = {
  AC: {
    value: '通过',
    slug: 'accept',
    alias: '编译通过',
    tagColor: 'tag-green'
  },
  SE: {
    value: '系统错误',
    slug: 'system_error',
    alias: '系统错误',
    tagColor: 'tag-orange'
  },
  TLE: {
    value: '超时',
    slug: 'time_limit_exceeded',
    alias: '超时',
    tagColor: 'tag-orange'
  },
  MLE: {
    value: '超内存',
    slug: 'memory_limit_exceeded',
    alias: '超内存',
    tagColor: 'tag-orange'
  },
  CE: {
    value: '编译错误',
    slug: 'compile_error',
    alias: '编译错误',
    tagColor: 'tag-red'
  },
  RE: {
    value: '运行时异常',
    slug: 'runtime_error',
    alias: '运行时异常',
    tagColor: 'tag-red'
  },
  WA: {
    value: '答案错误',
    slug: 'wrong_anwser',
    alias: '答案错误',
    tagColor: 'tag-red'
  }
}

export default constant
