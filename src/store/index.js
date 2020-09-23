import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
let user = JSON.parse(localStorage.getItem('user')) || {} ; //持久存储
 
let store = new Vuex.Store({
    state : {
        user : user
    },
    mutations : {
        addUser(state,data){
            state.user = data;  //保存了登录信息
            localStorage.setItem("user",JSON.stringify(state.user));
        }
    }
})
 
export default store;
