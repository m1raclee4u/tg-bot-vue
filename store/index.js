export const state = () => ({
  products: [],
  productsInCart: [],
  filteredItems: [],
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_MENU_OPENED(state, opened) {
    state.burgerMenuOpened = opened
  },
}

export const actions = {

  async fetchProducts({ commit }) {
    const productsFetch = await this.$axios
      .$get('http://localhost:8000/products')
  console.log(productsFetch);

  commit("SET_PRODUCTS", productsFetch);

},

}

export const getters = {
  products: s => s.products,
};