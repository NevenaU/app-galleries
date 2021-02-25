<template>
  <div>
    <h1>my galleries</h1>
    <div class="d-flex justify-content-center">
      <GallerySearch @handleSearchText="setSearchText" />
    </div>
  </div>
</template>

<script>
import GallerySearch from "./GallerySearch.vue";
export default {
  components: {
    GallerySearch,
  },
};
</script>

<style>
</style>