<template>
  <div>
    <label>Username:</label>
    <input type="text" v-model="user.email" /><br />
    <label>Password:</label>
    <input type="password" v-model="user.password" />
    <button @click="Login">Login</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    Login() {
      console.log(this.user)
      this.$http
        .post("https://vndreamers-dev.herokuapp.com/auth/login", this.user)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

<style scoped></style>
