<template>
<div class="">
  <button @click="buyClickHandler" class="add-btn" v-if="!isProductAdded">
    Добавить
  </button>
  <button v-else class="added add-btn" >
    Уже в корзине
  </button>
</div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productComputed() {
      return JSON.parse(JSON.stringify(this.product));
    },
    ...mapState({
      products: (state) => state.cart.products,
    }),
    isProductAdded() {      
      return this.products.find(p => p.id === this.productComputed.id);
    },
  },
  methods: {
    ...mapActions({
      addProduct: "cart/addProduct",
    }),
    async buyClickHandler() {
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      await delay(100);

      this.addProduct(this.productComputed);
        tg.MainButton.setText('Перейти в корзину');
        tg.MainButton.show();
    },
  },
  
};
</script>

<style lang="scss" scoped>
.add-btn {
  width: 75%;
  margin: 7px auto;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 9px 8px;
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}
.added{
  background: var(--tg-theme-secondary-bg-color) !important;
}
</style>