<template>
  <div>
      {{msg}}
  </div>
  <div>
      <button @click="$store.commit('add')"></button>
      <button @click="$store.commit('reduce')"></button>
  </div>
</template>
<script>
import store from '@/vuex/store'
export default {
    data () {
        return {
            msg :'hello Vuex'
        }
    }
}
</script>
