<template>
  <div class="base">
    <div class="columns is-centered">
      <div class="column is-10 has-text-centered">

    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <router-link to="/">Home</router-link>
        </a>
        <a href="" class="navbar-item">
          <router-link to="highlights">Highlights</router-link>
        </a>
        <a href="" class="navbar-item">
          <router-link to="about">About</router-link>
        </a>
        
        <div class="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- <div id="navMenubd-example" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item"
          @click="changeLanguage">
          {{ $t('utils.locale') }}
          </a>
        </div>
      </div> -->
    </nav>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      changeLanguage: function() {
        let locale = 'en'
        if (this.$store.getters.locale == 'en') {
          locale = 'ar';
        };
        return this.$store.commit('setLocale', locale);
      }
    },
  };
</script>
<style scoped lang="scss">
  .base, .navbar {
    background: black;
  }
  a {
    color:white;
    font-size: 18px;
    font-weight: 700; 
  }
  a:hover {
    background-color:black;
  }
</style>
