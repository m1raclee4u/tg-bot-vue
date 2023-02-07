<template>
  <div class="web-app">
    <headerComponent/>
    <div class="wrapper flex-wrap">
      <div v-for="product in this.paginatedProducts" :key="product.id">
        <product :product="product" />
      </div>
    </div>
    <button
      @click="loadMore"
      v-if="currentPage * maxPerPage < this.products.length"
      class="load-more"
    >
      Загрузить больше
    </button>
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
      maxPerPage: 10,
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
    // if (this.$store.getters["products"].length === 0) {
    this.$store.dispatch("fetchProducts");
    // }
  },
  methods: {
    log() {
      console.log(this.products);
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
};
</script>

<style lang="scss" scoped>


.flex-wrap{
  flex-wrap: wrap;

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
