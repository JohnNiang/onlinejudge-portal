<template>
  <div>
    <div v-for="(message, index) in messages" :key="index">
      <p style="cursor: pointer">
        {{message}}
        <span @click="close(index)">[X]</span>
      </p>
    </div>
    <input v-model="newMessage" @keyup.enter="broadcast">
    <button @click="broadcast">Broadcast</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      newMessage: ''
    }
  },
  computed: {
    ...mapState(['messages'])
  },
  methods: {
    ...mapMutations(['pushMessage', 'removeMessage']),
    broadcast() {
      this.pushMessage(this.newMessage)
      this.newMessage = ''
    },
    close(index) {
      this.removeMessage(index)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
