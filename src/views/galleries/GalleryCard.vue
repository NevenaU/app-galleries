<template>
    <div class="card-wrapper" v-if="gallery.images[0]">
        <div class="card">
            <h3 class="card-title"><router-link class="text-dark" :to="`/galleries/${gallery.id}`">{{gallery.title}}</router-link></h3>
             <img class="card-img" :src="gallery.images[0].url" alt="Card image cap">
              <p class="card-text">Author: <router-link class="text-dark" :to="`/author/${gallery.user.id}`">{{gallery.user.first_name}} {{gallery.user.last_name}}</router-link></p>
              <p class="card-text">Created at: {{gallery.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'gallery'
    ],
}
</script>

<style scoped>
.card-wrapper {
    width: 33.333%;
}
.card {   
    height: 750px; 
    display: flex;
    align-items: center;
     margin-right: 15px;    
     margin-bottom: 15px;
}
.card-title {
    height: 90px;
}
.card-img {
    height: 500px;
    width: 95%;
    margin-bottom: 15px;
}
.card-text {
    height: 30px;
}
</style>
