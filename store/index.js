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
    await fetch("../js/products.JSON")
    .then(res => res.json())
    .then(data => products = data)
 
    commit("SET_PRODUCTS", products);
  },

}

export const getters = {
  products: s => s.products,
};