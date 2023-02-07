<template>
  <div class="product">
    <div class="product__product">
      <img
        class="cart__image"
        :src="'https://frontend-test.idaproject.com' + product.photo"
        :alt="product.name"
      />
      <h5>{{ product.name }}</h5>
    </div>
    <p>{{ product.price }} ₽</p>
    <div class="delete"></div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;  
  .product__product {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 60px;

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
  background-image: url("../assets/img/icons/deleteCartItem.svg");
}
</style>