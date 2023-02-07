<template>
  <div class="web-app">
    <button @click="log">123</button>
    <div class="wrapper">
      <div v-for="product in this.products.slice(0, 10)" :key="product.id">
        <product :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import product from '../components/product.vue'

export default {
  components: { product },
  name: 'IndexPage',
  computed: {
    products() {
      return this.$store.getters["products"];
    },
  },
  beforeMount() {
    // if (this.$store.getters["products"].length === 0) {
      this.$store.dispatch("fetchProducts");
    // }
  },
  methods:{
    log(){
      console.log(this.products);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
