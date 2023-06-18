export const state = () => ({
  products: [],
  productsInCart: [],
  filteredItems: [],
  burgerOpen: false,
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  SET_BURGER_MENU_OPENED(state, opened) {
    state.burgerOpen = opened
  },
}

export const actions = {

  async fetchProducts({ commit }) {
    const productsFetch = await this.$axios
      .$get('https://api.deqo.ru/api/site/catalog-list')
  console.log(productsFetch);

  commit("SET_PRODUCTS", productsFetch.data);

},

}

export const getters = {
  products: s => s.products,
};
