export default function (vuexContext) {
  console.log('asdas',vuexContext.store)
  vuexContext.store.dispatch('initialState',vuexContext.request)
}
