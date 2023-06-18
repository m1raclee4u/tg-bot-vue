<template>
  <div class="burgerMenu">
    <div class="wrapper">
      <i @click="close" class="close"></i>
      <ul>
        <li>О нас</li>
        <li>Политика конфидецниальности</li>
        <li>Публиная оферта</li>
        <li>Работа у нас</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close(){
        this.$emit('buttonClosePressed')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close{
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-image: url('@/assets/img/icons/deleteCartItem.svg');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 25px;
    right: 25px;
  }
  .wrapper {
    padding-top: 80px !important;
  }

  ul {
    display: grid;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    li {
      text-align: center;
      list-style: none;
    }
  }

  .burgerMenu {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fdfdfd;
  }
</style>
