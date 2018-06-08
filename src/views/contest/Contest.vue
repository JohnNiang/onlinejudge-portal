<template>
  <div>
    <section class="section-tertiary">
      <div class="container">
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">#</div>
            <div class="col col-2">标题</div>
            <div class="col col-3">类型</div>
            <div class="col col-4">开始时间</div>
            <div class="col col-5">结束时间</div>
            <div class="col col-6">创建时间</div>
            <div class="col col-7">更新时间</div>
            <div class="col col-8">状态</div>
          </li>
          <li class="table-row" v-for="contest in contestForShow" :key="contest.contestId" @click="readMore(contest.contestId)">
            <div class="col col-1" data-label="#">{{contest.contestId}}</div>
            <div class="col col-2" data-label="标题">{{contest.title}}</div>
            <div class="col col-3 tags" data-label="类型">
              <span class="tag tag-rounded" :class="contest.typeTagColor">
                {{contest.typeLabel}}
              </span>
            </div>
            <div class="col col-4" data-label="开始时间">
              <font-awesome-icon :icon="['far', 'clock']" /> {{contest.startTime | parseTime}}
            </div>
            <div class="col col-5" data-label="结束时间">
              <font-awesome-icon :icon="['fas', 'clock']" /> {{contest.endTime | parseTime}}
            </div>
            <div class="col col-6" data-label="创建时间">{{contest.createTime | timeAgo}} 前</div>
            <div class="col col-7" data-label="更新时间">{{contest.updateTime | timeAgo}} 前</div>
            <div class="col col-8 tags" data-label="状态">
              <span class="tag tag-rounded" :class="contest.statusTagColor">
                {{contest.statusLabel}}
              </span>
            </div>
          </li>
        </ul>
        <my-pagination :total="pagination.total" :page="pagination.page" :rpp="pagination.rpp" @size-change="handleSizeChange" @current-change="handleCurrentPageChange"></my-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import MyPagination from '@/components/pagination/MyPagination'
import * as contestApi from '@/apis/contest'
import constant from '@/utils/constant'

export default {
  components: {
    MyPagination
  },
  data() {
    return {
      pagination: {
        page: 1,
        rpp: 5,
        sort: 'updateTime,desc',
        total: 0
      },
      contests: []
    }
  },
  computed: {
    contestForShow() {
      return this.contests.map(contest => {
        const contestType = constant.contestType[contest.type]
        contest.typeLabel = contestType.value
        contest.typeTagColor = contestType.tagColor

        const contestStatus = constant.contestStatus[contest.status]
        contest.statusLabel = contestStatus.value
        contest.statusTagColor = contestStatus.tagColor
        return contest
      })
    }
  },
  mounted() {
    this.getContests()
  },
  methods: {
    getContests() {
      contestApi
        .getContests(
          this.pagination.page,
          this.pagination.rpp,
          this.pagination.sort
        )
        .then(response => {
          if (response && response.status === 200) {
            this.contests = response.data.datas
            this.pagination.total = response.data.total
          }
        })
    },
    readMore(id) {
      this.$router.push({ name: 'contest_detail', params: { contestId: id } })
    },
    handleSizeChange(rpp) {
      this.pagination.rpp = rpp
      this.getContests()
    },
    handleCurrentPageChange(currentPage) {
      this.pagination.page = currentPage
      this.getContests()
    }
  }
}
</script>

<style lang="scss" scoped>
.contests_wrapper {
  padding-bottom: 10px;
}
.responsive-table {
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #95a5a6;
    color: #5f5959;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .col-1 {
    flex-basis: 5%;
  }
  .col-2 {
    flex-basis: 25%;
  }
  .col-3 {
    flex-basis: 10%;
  }
  .col-4 {
    flex-basis: 15%;
  }
  .col-5 {
    flex-basis: 15%;
  }
  .col-6 {
    flex-basis: 10%;
  }
  .col-7 {
    flex-basis: 10%;
  }
  .col-8 {
    flex-basis: 10%;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    li {
      display: block;
    }
    .col {
      flex-basis: 100%;
    }
    .col {
      display: flex;
      padding: 10px 0;
      &:before {
        color: #6c7a89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
}

.el-pagination {
  text-align: center;
}
</style>
