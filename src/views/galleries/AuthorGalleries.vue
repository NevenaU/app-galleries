<template>
  <div>
      <h1>{{author.first_name}} {{author.last_name}}</h1>

        <div class="d-flex justify-content-center">
            <GallerySearch @handleSearchText="setSearchText"/>
        </div>
        <hr>
        <div v-if="!authorGalleries.length">
            <h3>There is no galleries!</h3>
        </div>
        <div v-else>
            <div class="main-wrapper">
                <GalleryCard v-for="(gallery, index) in authorGalleries" :key="index" :gallery="gallery" />
            </div>
            <button class="btn btn-primary" style="marginBottom: 15px" v-if="currentSize <= numberOfGalleries" @click="loadMoreGalleries">Load More</button>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GalleryCard from "./GalleryCard";
import GallerySearch from "./GallerySearch";
export default {
  components: {
    GallerySearch,
    GalleryCard,
  },
  data() {
    return {
      currentSize: 10,
      searchText: "",
    };
  },
  methods: {
    ...mapActions('galleries',["getAuthorGalleries"]),
    loadMoreGalleries() {
      this.currentSize += 10;
      this.getAuthorGalleries({
        id: this.$route.params.id,
        pagination: this.currentSize,
        searchText: this.searchText,
      });
    },
    setSearchText(search) {
      this.searchText = search;
      this.getAuthorGalleries({
        id: this.$route.params.id,
        pagination: this.currentSize,
        searchText: this.searchText,
      });
    },
  },
  computed: {
    ...mapGetters('galleries',["author", "authorGalleries", "numberOfGalleries"]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getAuthorGalleries({
        id: vm.$route.params.id,
        pagination: 10,
        searchText: "",
      });
    });
  },
};
</script>

<style scoped>
body{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h1 {
  margin: 20px 20px;
  font-size: 35px;
  font-family:Arial, Helvetica, sans-serif
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-wrapper {
  width: 90%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
}

.card-wrapper {
    width: 50%;
}
</style>