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
    let products = [];
    await this.$axios
      .get('https://frontend-test.idaproject.com/api/product?category=1')
      .then(response => (products = response.data));
    await this.$axios
      .get('https://frontend-test.idaproject.com/api/product?category=2')
      .then(response => (products = products.concat(response.data)));
    await this.$axios
      .get('https://frontend-test.idaproject.com/api/product?category=3')
      .then(response => (products = products.concat(response.data)));
    commit("SET_PRODUCTS", products);
  },

}

export const getters = {
  products: s => s.products,
};