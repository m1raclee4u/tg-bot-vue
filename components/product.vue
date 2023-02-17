<template>
  <div class="product">
    <img class="img" :src="product.photo"/>
    <div class="info">
      <div class="title">
        {{ stringRemoveNumberName }}
      </div>
      <div class="description">
        {{ product.desc }}
      </div>
      <div class="price">
        <span
          >Стоимость: <b>{{ stringRemoveNumberPrice }} ₽</b></span
        >
      </div>
    </div>
    <button-add-to-cart :product="product" />
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import buttonAddToCart from "./buttons/button-add-to-cart.vue";

Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  components: { buttonAddToCart },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // favorites: [],
    };
  },
  computed:{
    stringRemoveNumberName() {
      let str = this.product.name;
      if (str.includes("Смартфон")) {
        str = str.slice(0, str.indexOf("("));
      }
      return str;
    },
    stringRemoveNumberPrice() {
      let str = this.product.salePrice;
      return str / 100;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // border: 1px solid var(--tg-theme-button-color);
  background-color: white;
  padding: 10px;
  max-width: 170px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 100%;
  justify-content: space-between;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.151);

  &:hover {
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.151);
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}

.img {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: white;
}

.description {
  font-size: 0.45em;
  color: #313131;
  font-style: italic;
}

.price {
  color: black;
  font-size: 12px;
}
.price span {
  color: black;
}

.title {
  max-width: 170px;
  word-break: break-word;
  font-size: 12px;
  color: black;
  text-align: center;
}
</style>