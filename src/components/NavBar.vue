<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'Home' }" class="navbar-brand"
      >All Galleries</router-link
    >

    <div class="nav-box">
      <template v-if="!isAuthenticated">
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link>
      </template>
      <template v-else>
        <a class="button" @click="logout">Logout</a>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "nav-bar",
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
  logout(){
      this.logout()
    }
};
</script>
