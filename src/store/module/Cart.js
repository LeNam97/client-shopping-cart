import api from '../../api/cart'

const state = {
  listCarts: [],
}
const getters = {
  getListCarts (state) {
    return state.listCarts;
  },
  countListCarts (state) {
    let item = 0;
    if (state.listCarts === []) {
      return item
    }
    state.listCarts.forEach(data => {
      item += parseInt(data.quantity);
    })
    return item;
  },
}
const mutations = {
  async UPDATE_QUANTITY (state, payload) {
    const list = [...state.listCarts]
    list.forEach(item => {
      if (item.id === payload.id) {
        item.quantity = payload.quantity;
      }
    })
    return state.listCarts = list
  },
  SAVE_CARTS (state) {
    const data = []
    state.listCarts.forEach(item => {
      data.push(item)
    })
    api.saveCarts(data).then(result => {
      console.log(result)
    })
  },
  CHECK_OUT (state) {
    api.checkOut().then(result => {
      console.log(result)
    })
    state.listCarts = []
  },
  async SET_LIST_CART (state) {
    try {
      await api.getCarts().then(result => {
        if (result.data === null) {
          state.listCarts = []
        } else {
          state.listCarts = result.data.productItem
        }
      })
    } catch (err) {
      return err
    }
    // return new Promise((resolve) => {
    //   console.log('SET_LIST_CART')
    //   return api.getCarts().then(result => {
    //     if (result.data === null) {
    //       state.listCarts = []
    //     } else {
    //       state.listCarts = result.data.productItem
    //     }
    //     resolve(state.listCarts)
    //   })
    // })
  }
}
const actions = {
  updateQuantity (vuexContext, payload) {
    vuexContext.commit('UPDATE_QUANTITY', payload);
  },
  saveCart (vuexContext) {
    vuexContext.commit('SAVE_CARTS')
  },
  checkout (vuexContext) {
    vuexContext.commit('CHECK_OUT')
  },

}
export default {
  state, getters, mutations, actions
}
