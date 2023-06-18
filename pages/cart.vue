<template>
  <div class="web-app">
    <header-component />
    <div class="wrapper">
      <div v-if="this.getProducts.length > 0" class="cart">
        <div class="productsInCart">
          <div
            class="oneProduct"
            v-for="product in getProducts"
            :key="product.title"
          >
            <productInCart :product="product" />
          </div>
        </div>
        <p @click="sendData" class="tg-color" v-if="getProducts.length > 0">
          Итого: {{ totalPriceComputed }} ₽
        </p>
      </div>
      <p
        class="tg-color"
        v-if="this.getProducts.length === 0"
        style="text-align: center; width: 100%"
      >
        В вашей корзине пусто, <br />
        но наш <Nuxt-link to="/"> каталог полон товаров.</Nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import productInCart from "../components/product-in-cart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    sendData() {
      const { queryId } = useTelegram();
      var data = {
        products: this.getProducts,
        price: this.totalPriceComputed,
        queryId,
      };
      fetch("http://localhost:8000/web-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      this.$store.dispatch("cart/clearCart")
      },
  },
  components: { productInCart },
  computed: {
    ...mapGetters("cart", ["getProducts"]),
    totalPriceComputed() {
      let fullPrice = 0;
      for (const item in this.getProducts) {
        if (Object.hasOwnProperty.call(this.getProducts, item)) {
          const element = this.getProducts[item];
          fullPrice += Number(element.price);
        }
      }
      return fullPrice;
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
    this.$once("hook:beforeDestroy", () => {
      tg.offEvent("mainButtonClicked", this.sendData);
    });
  },
};
</script>

<style lang="scss" scoped>
.tg-color {
  color: black;
  a {
    color: black;
  }
}
.cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
