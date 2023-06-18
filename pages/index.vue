<template>
  <div class="web-app">
    <headerComponent />
    <div class="wrapper flex-wrap">
      <p>
        Показано товаров: {{ paginatedProducts.length }} из {{ foundResults }}
      </p>

      <div v-for="product in this.paginatedProducts" :key="product.code">
        <product :product="product" />
      </div>
    </div>
    <div class="load">
      <p>
        Показано товаров: {{ paginatedProducts.length }} из {{ foundResults }}
      </p>
      <button
        @click="loadMore"
        v-if="currentPage * maxPerPage < this.products.length"
        class="load-more"
      >
        Загрузить больше
      </button>
    </div>
  </div>
</template>

<script>
import product from "../components/product.vue";
import headerComponent from "../components/header-component.vue";

export default {
  components: { product, headerComponent },
  name: "IndexPage",
  data() {
    return {
      currentPage: 1,
      maxPerPage: 6,
      showReadMore: true,
    };
  },
  computed: {
    products() {
      return this.$store.getters["products"];
    },
    foundResults() {
      return this.products.length;
    },
    totalResults() {
      return Object.keys(this.orders).length;
    },
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffest() {
      return this.maxPerPage * this.currentPage;
    },
    paginatedProducts() {
      return this.products.slice(0, this.currentPage * this.maxPerPage);
    },
  },
  beforeMount() {
    if (this.$store.getters["products"].length === 0) {
      this.$store.dispatch("fetchProducts");
    }
  },
  methods: {
    routeToCart() {
      this.$router.push("/cart");
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
  mounted() {
    if (this.products.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.setText("Перейти в корзину");
      tg.MainButton.show();
    }
    tg.onEvent("mainButtonClicked", this.routeToCart);

    this.$once("hook:beforeDestroy", () => {
      tg.offEvent("mainButtonClicked", this.routeToCart);
    });
  },
  // updated() {
  //   tg.onEvent("mainButtonClicked", this.routeToCart);
  // },
  // beforeDestroy() {
  //   tg.offEvent("mainButtonClicked", this.routeToCart);
  // },
};
</script>

<style lang="scss" scoped>
.load{
    display: flex;
    flex-direction: column;
    gap: 20px;
  p{
    text-align: center;
    font-size: 12px;
  }
}
.flex-wrap {
  flex-wrap: wrap;
  p {
    width: 100%;
    text-align: left;
    font-size: 12px;
  }
}
.load-more {
  width: 75%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 20px;
  border: none;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}
</style>
