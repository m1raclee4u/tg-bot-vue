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
    <Button class="add-btn" @click="addProductHandler"> Добавить </Button>
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
    addProductHandler() {
      if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;
  // border: 1px solid var(--tg-theme-button-color);
  background-color: var(--tg-theme-bg-color);
  padding: 15px;
  max-width: 170px;
  border-radius: 6px;
  box-sizing: border-box;
  height: 100%;
  justify-content: space-between;
  &:hover {
    box-shadow: 0px 10px -25px 0px var(--tg-theme-hint-color);
  }
}

.img {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: var(--tg-theme-bg-color);
}

.description {
  font-size: 0.7em;
  color: #727272;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
}

.add-btn {
  width: 75%;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 9px 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  // background: blue;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}

.price {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--tg-theme-text-color);
}
.price span {
  color: var(--tg-theme-text-color);
}

.title {
  max-width: 170px;
  word-break: break-word;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--tg-theme-text-color);
}
</style>