
<template>
  <div class="container jumbotron">
    <form @submit.prevent="createGallery">
      <div class="mb-3">
        <h1 class="h3 mb-3 font-weight-normal">Create New Gallery</h1>
        <label for="inputGalleryTitle" class="sr-only"
          >Title of the Gallery</label
        >
        <input
          v-model="title"
          type="text"
          id="inputGalleryTitle"
          class="form-control"
          placeholder="Gallery title"
          required
          minlength="2"
          maxlength="255"
        />
      </div>

      <div class="mb-3">
        <label for="inputDescription">Description</label>
        <textarea
          id="inputDescription"
          class="form-control"
          rows="8"
          cols="80"
          v-model="description"
          placeholder="You can describe your gallery here."
        >
        </textarea>
      </div>

      <button class="btn btn-primary btn-block" type="submit">Submit</button>
      <button @click="cancel" class="btn btn-secondary btn-block" type="button">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>
import galleryService from "../services/gallery_service";

export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    createGallery() {
      galleryService
        .createGallery({
          title: this.title,
          description: this.description,
        })
        .then(() => this.$router.push('/'))
        .catch((errors) => {
          this.errors = errors.response.data.errors;
        });
    },
    cancel() {
      this.$router.push('/');
    },
   
  },
};
