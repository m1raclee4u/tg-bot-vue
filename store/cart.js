// function for Mock API
const sleep = m => new Promise(r => setTimeout(r, m))

export const state = () => ({
  products: [],
  version: '0.0.1'

})
export const mutations = {
  ADD_PRODUCT(state, product) {
    let arr = state.products
    if (!arr.find(p => p.code === product.code))
      state.products = [...state.products, product]
  },
  REMOVE_PRODUCT(state, product) {
    let arr = state.products
    arr = arr.splice(arr.indexOf(arr.find((p) => p.code === product.code), 1))
  },
  CLEAR_CART(state) {
    let arr = state.products
    arr = arr.splice(0, this.arr.length)
  },
}
export const actions = {
  async addProduct({ commit }, data) {
    await sleep(300)
    await commit('ADD_PRODUCT', data)
  },
  async removeProduct({ commit }, data) {
    await sleep(300)
    await commit('REMOVE_PRODUCT', data)
  },
  async clearCart({ commit }) {
    await sleep(300)
    await commit('CLEAR_CART')
  },
}

export const getters = {
  getProducts: (state) => {
    return [...state.products]
  },
}