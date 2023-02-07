<template>
  <div class="web-app">
    <header-component />
    <div class="wrapper">
      <div class="cart">
        <div class="productsInCart">
          <div
            class="oneProduct"
            v-for="product in getProducts"
            :key="product.id"
          >
            <productInCart :product="product" />
          </div>
        </div>
        <p v-if="getProducts.length > 0">Итого: {{ fullprice }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
import productInCart from "../components/product-in-cart.vue";
import { mapGetters } from "vuex";

export default {
  components: { productInCart },
  computed: {
    ...mapGetters("cart", ["getProducts"]),
    fullprice() {
      let fullPrice = 0;
      for (const item in this.getProducts) {
        if (Object.hasOwnProperty.call(this.getProducts, item)) {
          const element = this.getProducts[item];
          fullPrice += element.price;
        }
      }
      return fullPrice;
    },
  },
  methods: {
    sendData() {
      // const data = {
      //     products: this.getProducts,
      //     price: this.fullPrice,
      //     queryId
      // }
      // fetch('http://localhost:8000/web-data', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data)
      // })
      this.$router.push("/");
      console.log("cartHandler");
    },
  },
  mounted() {
    if (this.getProducts.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.setText("Оформить заказ");
      tg.MainButton.show();
    }
    tg.onEvent("mainButtonClicked", this.sendData);
    this.$once('hook:beforeDestroy', () => {
      tg.offEvent("mainButtonClicked", this.sendData);
    });
  },
//   updated() {
//     tg.onEvent("mainButtonClicked", this.sendData);
//   },
//   beforeDestroy() {
//     tg.offEvent("mainButtonClicked", this.sendData);
//   },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 100%;
  // max-width: 100%;
  p {
    text-align: right;
  }
}
.oneProduct {
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.226);
}
</style>