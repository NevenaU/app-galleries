<template>
  <div id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand"
        >All Galleries</router-link
      >
      <div class="layout-item" v-if="isAuthenticated">
        <router-link to="/my-galleries"> My Galleries </router-link> |
        <router-link to="/create"> Create New Gallery </router-link> |
      </div>
      <div class="nav-box">
        <template v-if="!isAuthenticated">
          <router-link to="/register"> Register </router-link> | 
          <router-link to="/login"> Login </router-link>
        </template>
        <template v-else>
          <a class="button" @click="logout"> Logout </a>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "nav-bar",
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth",["logout"]),
  
  },

};
</script>




<style>
#layout {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: aliceblue;
  margin-bottom: 50px;
}
#layout a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.layout-item {
  align-self: center;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>