<template>
  <div style="max-width: 100%;
    max-height: 100%;
    width: 100vw;
    height: 100vh;" class="wrapper background">
    <video
      playsWhen=canplaythrough
      autoplay
      muted
      loop="false"
      src="/video/main.webm"></video>
    <div class="info">
      <p>Новое слово в <strong><i>устойчивой</i></strong> моде</p>
      <button @click="$router.push('/catalog')">Узнать подробнее</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index.vue",
    data() {
      return {
        isReady: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.isReady = true
      }, 2000)
    }
  }
</script>

<style lang="scss" scoped>
  body {
    background-color: #000;
  }
  .wrapper{
    background-color: #000;
  }
  .background {
    color: white;

    .info {
      animation: animation-name 6s;

      position: absolute;
      bottom: 50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 90%;

      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 5.7vw;
        margin-bottom: 25px;
      }

    }
  }

  button {
    width: 100%;
    max-width: 250px;
    height: 50px;
    border: 1px solid white;
    border-radius: 50px;
    background-color: transparent;
    color: white;
    font-size: 14px;
  }

  @keyframes animation-name {
    0% {
      opacity: 0;
      bottom: -500px;
    }
    100% {
      opacity: 1;
      bottom: 50px;
    }
  }
</style>
