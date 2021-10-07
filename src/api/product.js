import Api from './index'

export default{
  getProducts(){
    return Api().get('/product')
  },
}
