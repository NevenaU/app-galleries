<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          required
          v-model="credentials.email"
          type="email"
          class="form-control"
          id="email"
          name="email"
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
          name="password"
          aria-describedby="password"
        />
      </div>
      <p v-if="loginFailed" class="error-message" style="color:red;">Incorrect email or password</p>
      <button type="submit" class="btn btn-primary">Login</button>
      <div class="mt-2">
        <router-link to="/register">Please register if you don't have an account</router-link>
      </div>
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
        password: ""
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
form{
 margin-top: 50px;
}
</style>