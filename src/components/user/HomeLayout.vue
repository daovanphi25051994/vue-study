<template>
  <div>
    <label>Username:</label>
    <input type="text" v-model="user.email" /><br />
    <label>Password:</label>
    <input type="password" v-model="user.password" />
    <button @click="Login">Login</button>
    <p>Id: {{ this.info.id }}</p>
    <p>Address: {{ this.info.address }}</p>
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
      },
      info: {
        id: '',
        address: ''
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
           return response.json();
          },
          error => {
            console.log(error);
          }
        ).then(data =>{
          this.info = data.user;
        })
    }
  }
};
</script>

<style scoped></style>
