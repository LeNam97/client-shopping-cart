import Api from './index'

export default {
  getCarts () {
    return Api().get('/cart')
  },
  saveCarts (data) {
    return Api().post('/cart', data)
  },
  checkOut () {
    return Api().post('/cart/checkout')
  }
}
