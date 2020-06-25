import Vue from "vue";
import Vuex from "vuex";
import stocks from './modules/stocks'
import profile from './modules/profile'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        stocks,
        profile
    }
})
export default store