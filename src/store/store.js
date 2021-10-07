import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from "vue-axios";
import Product from './module/Product'
import Cart from './module/Cart'
import Message from './module/Messages';
import Auth from './module/Auth';

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  modules: {
    namespaced: true,
    Product,
    Cart,
    Message,
    Auth,
  },
  state: {
    money: ''
  },
  getters: {
    money (state) {
      console.log('money', state.money)
      return state.money;
    },
    getSubtotal: (state) => (id) => {
      let subtotal = 0;
      let cart = state.Cart.listCarts.find(item => item.id === id);
      let product = state.Product.listProducts.find(item => item._id === id);
      subtotal = cart.quantity * product.price;
      return subtotal;
    },
  },
  mutations: {
    addCart (state, payload) {
      if (state.Cart.listCarts.length === 0) {
        let item = {id: payload, quantity: 1, status: false}
        return state.Cart.listCarts.push(item);
      } else {
        let item = state.Cart.listCarts.map(function (data) {
          return data.id
        }).indexOf(payload);
        if (item === -1) {
          let data = {id: payload, quantity: 1, status: false}
          state.Cart.listCarts.push(data);
        } else {
          state.Cart.listCarts.forEach(data => {
            if (data.id === payload) {
              data.quantity++;
            }
          })
        }
      }
    },
    removeCart (state, payload) {
      let item = state.Cart.listCarts.indexOf(payload);
      return state.Cart.listCarts.splice(item, 1);
    },
    SET_MONEY (state) {
      return new Promise(resolve => {
        let sumMoney = 0;
        state.Cart.listCarts.forEach(data => {
            console.log('data', data.id)
            let item = state.Product.listProducts.find(item => item._id === data.id);
            console.log('item', item.price)
            sumMoney += data.quantity * item.price;
            console.log('set data money', sumMoney)
            console.log(sumMoney)
        })
        state.money = sumMoney
        resolve(state.money)
      })
    }

  },
  actions: {
    addNewCart ({commit}, payload) {
      commit('addCart', payload)
    },
    removeCart ({commit}, payload) {
      commit('removeCart', payload);
    },
  },
})
