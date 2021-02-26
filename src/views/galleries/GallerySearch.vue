<template>
    <div class="search">
        <form class="form-inline" @submit.prevent="handleSearchText">
            <input class="form-control" type="search" placeholder="Search galleries..." v-model="search">
            <button  class="btn btn-primary" type="submit">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }   
    },
    methods: {
        handleSearchText() {
            this.$emit('handleSearchText', this.search)
        }
    }
}
</script>

<style>
div.search {
    margin-top:10px;
    margin-bottom: 20px;
}

.btn{
  color: var(--button-color);
  background-color: rgb(116, 216, 255);

} 
</style>