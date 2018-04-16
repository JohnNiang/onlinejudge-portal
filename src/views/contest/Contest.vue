<template>
  <div>
    <section class="section-tertiary">
      <div class="container">
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">#</div>
            <div class="col col-2">title</div>
            <div class="col col-3">type</div>
            <div class="col col-4">started</div>
            <div class="col col-5">ended</div>
            <div class="col col-6">created</div>
            <div class="col col-7">updated</div>
            <div class="col col-8">status</div>
          </li>
          <li class="table-row" v-for="contest in contests" :key="contest.contestId" @click="readMore(contest.contestId)">
            <div class="col col-1" data-label="#">{{contest.contestId}}</div>
            <div class="col col-2" data-label="title">{{contest.title}}</div>
            <div class="col col-3" data-label="type">{{contest.type}}</div>
            <div class="col col-4" data-label="started">{{contest.startTime | parseTime}}</div>
            <div class="col col-5" data-label="ended">{{contest.endTime | parseTime}}</div>
            <div class="col col-6" data-label="created">{{contest.createTime | timeAgo}}</div>
            <div class="col col-7" data-label="updated">{{contest.updateTime | timeAgo}}</div>
            <div class="col col-8" data-label="status">{{contest.status}}</div>
          </li>
        </ul>
        <my-pagination></my-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import MyPagination from '@/components/pagination/MyPagination'
import * as contestApi from '@/apis/contest'

export default {
  components: {
    MyPagination
  },
  data() {
    return {
      pagination: {
        page: 1,
        rpp: 5,
        sort: '',
        total: 0
      },
      contests: []
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
    currentPageChange(currentPage) {
      this.pagination.page = currentPage
      this.getContests()
    },
    readMore(id) {
      this.$router.push({ name: 'contest_detail', params: { contestId: id } })
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
    .table-row {
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
