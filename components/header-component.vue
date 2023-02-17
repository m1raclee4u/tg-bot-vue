<template>
  <header>
    <burgerMenu v-if="$store.state.burgerOpen === true" />
    <div @click="$store.commit('SET_BURGER_MENU_OPENED', !$store.state.burgerOpen)" class="burger"></div>
    <div @click="$router.push('/')" class="logo"></div>
    <div @click="$router.push('/cart')" class="cart">
      <!-- Товаров в корзине : {{ $store.state.cart.products.length }} -->
      <i class="cartCounter">{{ $store.state.cart.products.length }}</i>
    </div>
  </header>
</template>

<script>
import burgerMenu from "../components/buttons/burgerMenu.vue";

export default {
  components: { burgerMenu },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  background-color: white;
  height: 60px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  cursor: pointer;
  // margin: 0 auto;
  width: 52px;
  height: 46px;
  background-size: cover;
  background-position: center;
  // background-image: url("https://sun9-13.userapi.com/impg/E7kr6rybiGuaTdXQiaR7a5bvdVsRY6YSRZQupg/QrRbq_910IE.jpg?size=640x640&quality=95&sign=00b1ff7b83f6657eb50b2acd5ad03187&type=album");
  background-image: url("../assets/img/icons/logo.svg");
}
.burger {
  color: white;
  font-size: 12px;
  width: 16px;
  height: 16px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/icons/burger.svg");
  cursor: pointer;
  transition: 1s;
}
.cart {
  cursor: pointer;
  color: white;
  font-size: 12px;
  width: 16px;
  height: 23px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/icons/cart.svg");
  transition: 1s;
  .cartCounter {
    transition: 1s;
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    margin-left: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background-color: #FFDD84;
    text-align: center;
    color: black;
    font-size: 12px;
    font-style: unset;
    // font-weight: bold;
    line-height: 14px;
  }
}
</style>