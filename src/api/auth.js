import Api from './index'

export default {
  login(data) {
    return Api().post('/user/login', data)
  },
  register(data) {
    return Api().post('/user/register', data)
  },
  secret(data) {
    return Api().get('/user/secret', data)
  }
}
