<template>
  <div class="product">
    <img
      class="img"
      :src="'https://frontend-test.idaproject.com' + product.photo"
      :alt="product.name"
    />
    <div class="title">{{ product.name }}</div>
    <div class="description">{{ product.description }}</div>
    <div class="price">
      <span
        >Стоимость: <b>{{ product.price }}</b></span
      >
    </div>
    <Button class="add-btn" @click="addProductHandler">
      Добавить в корзину
    </Button>
  </div>
</template>

<script>

import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);
export default {
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
  methods: {
    addProductHandler(){
      if (tg.MainButton.isVisible){
        tg.MainButton.hide()
      }
      else {
        tg.MainButton.show()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;
  box-shadow: -1px 5px 8px 0px rgba(34, 60, 80, 0.2); /* border: 1px solid var(--tg-theme-button-color); */
  padding: 15px;
  max-width: 170px;
  background-color: white;
  border-radius: 6px;
  box-sizing: border-box;
  height: 100%;
  justify-content: space-between;
}

.img {
  width: 100%;
  background: lightgray;
  height: auto;
  margin: 0 auto;
  background: var(--tg-theme-button-color);
}

.description {
  font-size: 0.7em;
  color: #727272;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
}

.add-btn {
  width: 100%;
}

.price {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
}
.price span {
  /* color: ; */
}

.title {
  max-width: 170px;
  word-break: break-word;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
}
</style>