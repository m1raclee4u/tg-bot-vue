<template>
  <div class="product">
    <div class="product__product">
      <img class="cart__image" :src="IH.getUrl($axios.defaults.baseURL + '/' + product?.image, 387, fm = 'webp',)" />
      <h5>{{ product.title }}</h5>
    </div>
    <p>{{ product.price }}₽</p>
    <div @click="deleteClickHandler" class="delete"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ImageHelper from "~/plugins/imageHelper";
export default {
  data() {
    return {
      IH: new ImageHelper(),
    }
  },
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      removeProduct: "cart/removeProduct",
    }),
    deleteClickHandler() {
      this.removeProduct(this.product);
    },
  }
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  color: black;
  p{
      font-weight: normal;
      font-size: 13px;
    }
  .product__product {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 60px;
    width: 100%;
    max-width: 200px;
    h5 {
      font-weight: normal;
      font-size: 13px;
    }

    .cart__image {
      // width: 30px;
      max-height: 100%;
    }
  }
}
.delete {
  width: 15px;
  height: 15px;
  background-size: cover;
  background-image: url("@/assets/img/icons/deleteCartItem.svg");
}
</style>
