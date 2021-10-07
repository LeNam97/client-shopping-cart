import request from 'axios'

export default () =>{
  return request.create({
    baseURL : 'http://localhost:3000/api'
  })
}
