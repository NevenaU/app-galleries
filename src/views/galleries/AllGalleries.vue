<template>
  <div>
    
    <h1>All Galleries:</h1>
    <hr />

    <div class="d-flex justify-content-center">
      <GallerySearch @handleSearchText="setSearchText" />
    </div>
    <div v-if="!galleries.length">
      <h3>There is no galleries!</h3>
    </div>
    <div v-else>
      <div class="main-wrapper">
        <GalleryCard
          v-for="gallery in galleries"
          :key="gallery.id"
          :gallery="gallery"
        />
      </div>
      <button
        class="btn btn-primary"
        style="margin-bottom: 50px"
        v-if="currentSize <= numberOfGalleries"
        @click="loadMoreGalleries"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GallerySearch from "./GallerySearch.vue";
import GalleryCard from "./GalleryCard.vue";
export default {
  components: {
    GalleryCard,
    GallerySearch,
  },
  data() {
    return {
      currentSize: 10,
      searchText: "",
    };
  },
  computed: {
    ...mapGetters("galleries", ["numberOfGalleries", "galleries"]),
  },
  methods: {
    ...mapActions("galleries", ["getAllGalleries"]),
    loadMoreGalleries() {
      this.currentSize += 10;
      this.getAllGalleries({
        pagination: this.currentSize,
        searchText: this.searchText,
      });
    },
    setSearchText(search) {
      this.searchText = search;
      this.getAllGalleries({
        pagination: this.currentSize,
        searchText: this.searchText,
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getAllGalleries({ 'pagination': 10, 'searchText': "" });
    });
  },
};
</script>

<style scoped>
body{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h3 {
  margin: 40px 0 0;
}
h1 {
  margin-top: 20px;
  font-size: 40px;
  font-family:Arial, Helvetica, sans-serif
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
  font-family:Arial, Helvetica, sans-serif;
  font-size: 10px;
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
