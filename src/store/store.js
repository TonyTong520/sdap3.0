import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const state = {
//     count : 1
// }

// const mutations  = {
//     add (state) {
//         state.count += 1
//     },
//     reduce ( state ) {
//         state.count -= 1
//     }
// }
var state = {
    count: 10
}

const mutations = {
    increment(state){  // 处理状态（数据变化）
        state.count++;
    },
    decrement(state){
        state.count--;
    }
}

const actions = {
    increment: ({commit}) => {  // 处理你要干什么，异步请求，判断，流程控制
        console.log(commit)
        commit('increment')
    },
    decrement:({commit}) => {
        commit('decrement')
    }
}

const getters = {
    count(state){
        return state.count
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})