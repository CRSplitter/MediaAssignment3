<template>
  <div class="base">
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-10 has-text-centered">
          <img src="../../assets/photo.jpg" alt="">
          <h2 class="title is-2">
            Ahmed Elgabri
          </h2>
          <h2 class="title is-2">
            34-16019
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .base {
    background: url('../../assets/background.jpg');
    height: 900px;
    h2 {
      color: white;
    }
    // .img {
    //   width: 50px;
    //   height: 50px;
    // }
    img {
      height: 300px;
      width:300px;
      object-fit: cover;
      object-position: 0px -10px;
      border-radius: 50%;
    }
  }
</style>
