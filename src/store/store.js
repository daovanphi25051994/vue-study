import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
state: {
    result: 1
},
getters: {
    result: state => {
        return state.result
    },
    tenResult: state => {
        return state.result * 10
    }
},
mutations: {
    plusTwo( state, n ){
        state.result += n
    }
}
})