<template>
  <div class="card">
    <h3 class="card-title">Detail</h3>
    <fieldset v-if="userDetail">
      <legend>basic</legend>
      <div class="form-control-group">
        <div class="form-control">
          <label>Create time</label>
          <div>
            <span>{{userDetail.createTime | timeAgo}} ago</span>
          </div>
        </div>
        <div class="form-control">
          <label>update time</label>
          <div>
            <span>{{userDetail.updateTime | timeAgo}} ago</span>
          </div>
        </div>
        <div class="form-control">
          <label>user type</label>
          <div>
            <span>{{userDetail.userType}}</span>
          </div>
        </div>
      </div>
      <div class="form-control">
        <label>User name</label>
        <input v-model="userDetail.username" :disabled="disabled" type="text" placeholder="Enter some info">
      </div>
      <div class="form-control">
        <input ref="inputFile" :disabled="disabled" type="file" name="image" id="image_file" class="input_file">
        <label for="input_file" @click="handleInputFileLabelClick">
          <font-awesome-icon :icon="['fas', 'cloud-upload-alt']"></font-awesome-icon>
          Avatar</label>
      </div>
    </fieldset>
    <fieldset>
      <legend>extra</legend>
      <div class="form-control">
        <label>intro</label>
        <textarea :disabled="disabled" placeholder="Enter your introduction..."></textarea>
      </div>
      <div class="form-control">
        <label>favourite language</label>
        <select :disabled="disabled" v-model="userDetail.extra.languageId">
          <option v-for="(language, index) in languages" :key="index" :value="language.languageId">
            {{language.name}}
          </option>
        </select>
      </div>
      <div class="form-control">
        <label>student number</label>
        <input :disabled="disabled" type="text" v-model="userDetail.extra.stuNum" />
      </div>
      <div class="form-control">
        <label>student name</label>
        <input :disabled="disabled" type="text" v-model="userDetail.extra.stuName" />
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

export default {
  data() {
    return {
      isEditing: false,
      userDetail: null,
      languages: []
    }
  },
  created() {
    // copy the user info
    this.userDetail = Object.assign({}, this.user)
    if (!this.userDetail.extra) {
      this.userDetail.extra = {}
    }
    this.getLanguages()
  },
  computed: {
    ...mapGetters(['user']),
    disabled() {
      return !this.isEditing
    },
    modifyText() {
      return this.isEditing ? 'Update' : 'Open update'
    }
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
