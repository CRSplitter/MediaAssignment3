<template>
  <div>
    <section class="hero heroo" id="scrollTo">
      <div class="hero-body has-text-centered">
        <div class="container content">
          <h1 class="title is-2">
            <b>Lebron's</b>
          </h1>
          <h2 class="subtitle">
            Your guide to basketball highlights
          </h2>
        </div>
      </div>
    </section>
    <div class="columns is-centered site-wrapper">
      <div class="column is-10">
        <div class="section">
          <h1 class="title is-2">New to basketball?</h1>
          <p>
            Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball through the defender's hoop while preventing the opposing team from shooting through their own hoop.
          </p>
        </div>
        <div class="section has-text-centered hooked">
          <h1 class="title is-2">Hooked?</h1>
          <h3 class="title is-3">
            Check out the <router-link to="highlights">highlights</router-link>now!
          </h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/slor9KFKMTY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>


</div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'hello',
  mixins: [clickaway],
  components: {
    Carousel,
    Slide,
  },
  methods: {
    away: function away() {
      console.log('clicked away');
    },
    paginationCallback: (page) => {
      console.log('pageNumber' + page);
    },
    fetchData: function(){
      const resource = this.$resource('posts/1');
      resource.get().then((response) => {
        this.products = response.body.results;
      });
    },
    ...mapActions([
      'listEntity'
    ]),
  },
  computed: mapState({
    entities: state => state.consumeRest.entities,
    pending: state => state.consumeRest.pending,
    error: state => state.consumeRest.error,
  }),
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      timeAgo:'<timeago since="7/6/1993"></timeago>',
    };
  },
  created: function created() {
    this.listEntity();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul{
    ul{
      padding-left:10px;
    }
  }
  .heroo {
    background: url('../../assets/hero.jpg')top center no-repeat;
    background-size: cover;
    background-position-y: 80%;
    // background-position-x: 60px;
    height: 600px;
  }
  .content {
    position: relative;
    h1, h2 {
      color: white;
    }  
  }
  .site-wrapper {
    background: url('../../assets/background.jpg');
    height: 1200px;
    background-size: cover;
    color:white;
    h1,h3 {
      color:white;
    }
  }
  .hooked {
    position: relative;
    top:220px;
  }
</style>
