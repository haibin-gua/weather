import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:localStorage.city||'荆门'
    },
    mutations:{
        changeCity(state,val){
        state.city = val[1].name
        localStorage.city = val[1].name
        }
    }
})
