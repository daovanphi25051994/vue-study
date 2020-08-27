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
        id: "",
        address: ""
      }
    };
  },
  methods: {
    Login() {
      console.log(this.user);
      this.$http
        .post("", this.user)
        .then(
          response => {
            return response.json();
          },
          error => {
            console.log(error);
          }
        )
        .then(data => {
          this.info = data.user;
          console.log(data);
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("role", data.roles[0].role_name);
          if (data.roles[0].role_name == "USER") {
            this.$router.push("/" + data.user.username);
          } else if (data.roles[0].role_name == "ADMIN") {
            this.$router.push("/admin/" + data.user.username + "/users");
          }
        });
    }
  }
};
</script>

<style scoped></style>
