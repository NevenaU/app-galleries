<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="first_name" class="form-label">First name</label>
        <input
          v-model="userData.first_name"
          type="text"
          required
          class="form-control"
          id="first_name"
          aria-describedby="first_name"
        />
        <p v-if="errors.first_name" class="text-danger">
          {{ errors.first_name[0] }}
        </p>
        <label for="last_name" class="form-label">Last Name</label>
        <input
          v-model="userData.last_name"
          type="text"
          required
          class="form-control"
          id="last_name"
          aria-describedby="name"
        />
        <p v-if="errors.last_name" class="text-danger">
          {{ errors.last_name[0] }}
        </p>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="userData.email"
          type="email"
          required
          class="form-control"
          id="email"
          aria-describedby="email"
        />
        <p v-if="errors.email" class="text-danger">{{ errors.email[0] }}</p>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="userData.password"
          type="password"
          required
          class="form-control"
          id="password"
          aria-describedby="password"
          minlength="8"
        />
        <p v-if="errors.password" class="text-danger">
          {{ errors.password[0] }}
        </p>
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="form-label"
          >Confirm password</label
        >
        <input
          v-model="userData.password_confirmation"
          type="password"
          required
          class="form-control"
          id="password_confirmation"
          aria-describedby="password_confirmation"
        />
      </div>

      <div class="mb-3">
        <div class="form-check">
          <input
            v-model="userData.terms"
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            I accept terms and conditions
          </label>
          <p v-if="errors.terms" class="text-danger">
            {{ errors.terms[0] }}
          </p>
        </div>
      </div>

      <p v-if="registerFailed" class="error-message">Something went wrong</p>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "register",
  data() {
    return {
      registerFailed: false,
      userData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: "",
      },
      errors: [],
    };
  },
  methods: {
    async handleSubmit() {
      this.registerFailed = false;
      try {
        await this.register(this.userData);
        this.$router.push("/");
      } catch {
        this.registerFailed = true;
      }
    },
    ...mapActions("auth", ["register"]),
  },
};
</script>

<style>
</style>