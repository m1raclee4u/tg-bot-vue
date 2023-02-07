<template>
  <header>
    <div @click="$router.push('/')" class="logo"></div>
    <div @click="$router.push('/cart')" class="cart">
      <i class="cartCounter">{{ $store.state.cart.products.length }}</i>
    </div>
  </header>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  background-color: black;
  height: 40px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  // margin: 0 auto;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  background-image: url("https://sun9-13.userapi.com/impg/E7kr6rybiGuaTdXQiaR7a5bvdVsRY6YSRZQupg/QrRbq_910IE.jpg?size=640x640&quality=95&sign=00b1ff7b83f6657eb50b2acd5ad03187&type=album");
}
.cart {
  width: 15px;
  height: 13px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/icons/cart.svg");
  transition: 1s;
  .cartCounter {
    transition: 1s;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    margin-left: 8px;
    margin-top: -4px;
    border-radius: 50%;
    background-color: #000;
    text-align: center;
    color: #fff;
    font-size: 8px;
    font-style: unset;
  }
}
</style>