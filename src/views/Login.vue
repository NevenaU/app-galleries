<template>
  <div>
      <h1>login</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          required
          v-model="credentials.email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="email"
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          required
          v-model="credentials.password"
          type="password"
          class="form-control"
          id="password"
          aria-describedby="password"
        />
      </div>
      <p v-if="loginFailed" class="error-message">Something went wrong</p>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      loginFailed: false,
      credentials: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async onSubmit() {
      this.loginFailed = false;
      try {
        await this.login(this.credentials);
        this.$router.push('/');
      } catch {
        this.loginFailed = true;
      }
    },
    ...mapActions('auth', ['login']),
  },
};
</script>

<style>
</style>