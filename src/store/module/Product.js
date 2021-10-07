import api from '../../../src/api/product'

const state = {
  listProducts: [],
}
const getters = {
  getProducts (state) {
    return state.listProducts
  },
  getProduct: (state) => (id) => {
    return state.listProducts.find(data => data._id === id)
  },
  getCart: (state) => (id) => {
    return state.listProducts.find(data => data._id === id)
  },
}
const mutations = {
  async SET_PRODUCT (state) {
    try {
      await api.getProducts().then(result => {
        if (result.data !== null) {
          return state.listProducts = result.data
        } else {
          return state.listProducts = []
        }
      })
    } catch (err) {
      return err
    }
    // return new Promise(resolve => {
    //   console.log('SET_PRODUCT')
    //   api.getProducts().then(result => {
    //     if (result.data !== null) {
    //       return state.listProducts = result.data
    //     } else {
    //       return state.listProducts = []
    //     }
    //   })
    //   resolve(state.listProducts)
    // })
  },
}
const actions = {}
export default {
  state, getters, mutations, actions
}
