<template>
  <div class="card">
    <h3 class="card-title">用户详情</h3>
    <fieldset v-if="userDetail">
      <legend>基础信息</legend>
      <div class="form-control-group">
        <div class="form-control">
          <label>创建时间</label>
          <div>
            <span>{{userDetail.createTime | timeAgo}} 前</span>
          </div>
        </div>
        <div class="form-control">
          <label>更新时间</label>
          <div>
            <span>{{userDetail.updateTime | timeAgo}} 前</span>
          </div>
        </div>
        <div class="form-control">
          <label>用户类型</label>
          <div>
            <span>{{userDetail.userTypeValue}}</span>
          </div>
        </div>
      </div>
      <div class="form-control">
        <label>用户名</label>
        <input v-model="userDetail.username" :disabled="disabled" type="text" placeholder="请输入用户名">
      </div>
      <div class="form-control">
        <label for="input_file" @click="handleInputFileLabelClick">
          <font-awesome-icon :icon="['fas', 'cloud-upload-alt']"></font-awesome-icon>
          头像
        </label>
        <img v-if="userDetail.avatar" :src="userDetail.avatar" alt="user avatar">
      </div>
    </fieldset>
    <fieldset v-if="userDetail.extra">
      <legend>额外信息</legend>
      <div class="form-control">
        <label>介绍</label>
        <textarea :disabled="disabled" placeholder="请输入您的自我介绍"></textarea>
      </div>
      <div class="form-control">
        <label>偏好语言</label>
        <select :disabled="disabled" v-model="userDetail.extra.languageId">
          <option v-for="(language, index) in languages" :key="index" :value="language.languageId">
            {{language.name}}
          </option>
        </select>
      </div>
      <div class="form-control">
        <label>学生学号</label>
        <input :disabled="disabled" placeholder="如果您有学号，请填写真实学号" type="text" v-model="userDetail.extra.stuNum" />
      </div>
      <div class="form-control">
        <label>学生姓名</label>
        <input :disabled="disabled" placeholder="如果您已经填写了学号，请填写真实的姓名" type="text" v-model="userDetail.extra.stuName" />
      </div>
    </fieldset>
    <div class="card-actions">
      <button class="button-primary button-long" @click="handleModifyClick">{{modifyText}}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import languageApi from '@/apis/language'
import constant from '@/utils/constant'

export default {
  data() {
    return {
      isEditing: false,
      userDetail: null,
      userExtra: null,
      languages: []
    }
  },
  computed: {
    ...mapGetters(['user']),
    disabled() {
      return !this.isEditing
    },
    modifyText() {
      return this.isEditing ? '更新' : '打开编辑'
    }
  },
  created() {
    console.log('user', this.$store.user)
    // copy the user info
    this.userDetail = Object.assign({}, this.user)
    console.log('user detail', this.userDetail)
    if (this.userDetail && this.userDetail.userType) {
      this.userDetail.userTypeValue =
        constant.userType[this.userDetail.userType].value
    }
    if (this.userDetail && !this.userDetail.extra) {
      this.userDetail.extra = {}
    }
    this.getLanguages()
  },
  methods: {
    handleInputFileLabelClick() {
      this.$refs.inputFile.click()
    },
    getLanguages() {
      languageApi.getLanguages().then(response => {
        if (response) {
          if (response.status === 200) {
            this.languages = response.data
          }
        }
      })
    },
    handleModifyClick() {
      if (this.isEditing) {
        // TODO update the user detail
      }
      this.isEditing = !this.isEditing
    }
  }
}
</script>

<style lang="scss" scoped>
.form-control {
  margin: 20px auto;
}

.input_file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  & + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
    padding: 20px;
  }
  &:focus + label,
  & + label:hover {
    cursor: pointer;
    background: red;
  }
  &:focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }
  & + label * {
    pointer-events: none;
  }
}
</style>
