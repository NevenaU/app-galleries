<template>
   <div>
    <h1>{{singleGallery.title}}</h1>
    <button class="btn btn-primary" v-if="activeUser.id == singleGallery.user.id" @click="handleEditGallery">Edit</button>
    <button class="btn btn-danger" v-if="activeUser.id == singleGallery.user.id" @click="handleDeleteGallery">Delete</button>
    
    <p class="card-text">Author: <router-link class="text-dark" :to="`/author/${singleGallery.user.id}`">{{singleGallery.user.first_name}} {{singleGallery.user.last_name}}</router-link></p>
    <p>Created at: {{singleGallery.created_at}}</p>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="960"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="(images, index) in singleGallery.images" :key="index" :img-src="images.url"></b-carousel-slide>
    </b-carousel>
   </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      comment:{
        body: '',
        post_id: this.$route.params.id
      },
      error: '',
      canComment: true
    }
  },
  methods: {
    ...mapActions('galleries',[
      'getSingleGallery',
    ]),
    ...mapActions('auth',[
      'getActiveUser',
    ]),
  },
  computed: {
    ...mapGetters('galleries',[
      'singleGallery',
    ]),
    ...mapGetters('auth',[
      'activeUser',
    ]),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getSingleGallery(vm.$route.params.id)
      if(localStorage.getItem('token')){
        vm.getActiveUser()
      }
      
    })
  }
}
</script>