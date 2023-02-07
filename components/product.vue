<template>
  <div class="product">
    <img
      class="img"
      :src="'https://frontend-test.idaproject.com' + product.photo"
      :alt="product.name"
    />
    <div class="info">
      <div class="title">{{ product.name }}</div>
      <div class="description">
        8x2.2 ГГц, 4 ГБ, 2 SIM, IPS, 2340x1080, камера 48+5 Мп, 3G, 4G, GPS,
        4000 мАч
      </div>
      <div class="price">
        <span
          >Стоимость: <b>{{ product.price }} ₽</b></span
        >
      </div>
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
  gap: 10px;
  // border: 1px solid var(--tg-theme-button-color);
  background-color: var(--tg-theme-bg-color);
  padding: 10px;
  max-width: 170px;
  border-radius: 10px;
  box-sizing: border-box;
  height: 100%;
  justify-content: space-between;
  &:hover {
    box-shadow: 0px 10px 20px -5px var(--tg-theme-hint-color);
  }
  .info{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}

.img {
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: var(--tg-theme-bg-color);
}

.description {
  font-size: 0.45em;
  color: #727272;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
}

.add-btn {
  width: 75%;
  margin: 7px auto;
  border: none;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 9px 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;
  // background: blue;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
}

.price {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--tg-theme-text-color);
  font-size: 12px;
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