import Api from '../../api/auth'
import Cookie from 'js-cookie'
import axios from "axios"

const state = {
  isLogin: '',
  token: '',
  user: ''
}
const getters = {
  isLogin (state) {
    return state.isLogin
  },
  isAuthenticated (state) {
    return state.token
  },
  getUser (state) {
    return state.user
  }
}

const mutations = {
  SET_TOKEN (state, payload) {
    state.token = payload
  },
  CHECK_LOGIN (state, payload) {
    return state.isLogin = payload
  },
  CLEAR_TOKEN (state) {
    return state.null
  },
  SET_USER_ACCOUNT (state, payload) {
    return state.user = payload
  }
}

const actions = {
  getCookie () {
    const token = Cookie.get('token')
    return !!token
  },
  login (vuexContext, payload) {
    Api.login(payload).then(data => {
      localStorage.setItem('token', data.data)
      localStorage.setItem('tokenExpiration', new Date().getTime())
      axios.defaults.headers.common["Authorization"] = "Bearer " + data.data;
      Cookie.set('token', data.data)
      Cookie.set('tokenExpiration', new Date().getTime())
      vuexContext.commit('SET_TOKEN', data)
      Api.secret().then(result => {
        vuexContext.commit('SET_USER_ACCOUNT', result.data.email)
      })
      vuexContext.commit('CHECK_LOGIN', false)
    })
  },
  register ({commit}, payload) {
    Api.register(payload).then(data => {
      if (data.data === true) {
        commit('LOGIN', data.data)
      }
    })
  },
  logout (vuexContext) {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
    Cookie.remove('token')
    Cookie.remove('tokenExpiration')
    vuexContext.commit('CLEAR_TOKEN')
    vuexContext.commit('CHECK_LOGIN', true)
  },
  async initialState (vuexContext) {
    const token = localStorage.getItem('token')
    if (token) {
      console.log('init true')
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      vuexContext.commit('SET_TOKEN', token)
      Api.secret().then(result => {
        vuexContext.commit('SET_USER_ACCOUNT', result.data.email)
      })
      vuexContext.commit('CHECK_LOGIN', false)
      await vuexContext.commit('SET_PRODUCT')
      await vuexContext.commit('SET_LIST_CART')
      vuexContext.commit('SET_MONEY')
    } else {
      vuexContext.commit('CHECK_LOGIN', true)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
