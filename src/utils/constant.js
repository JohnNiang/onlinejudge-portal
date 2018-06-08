const constant = {}

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

export default constant
