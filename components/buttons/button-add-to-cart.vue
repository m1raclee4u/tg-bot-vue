<template>
  <button @click="buyClickHandler" v-if="!isProductAdded">
    Добавить
  </button>
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
      let added = this.products.find((p) => {
        p.id === this.productComputed.id;
      });
      return added;
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
      this.$emit('addProductListener');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>