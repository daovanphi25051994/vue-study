<template>
  <div>
    <h1>Post Management</h1>
    <p>this is a table post</p>
    <p>Result state : {{ result }}</p>
    <p>Result x 10: {{ tenResult }}</p>
    <p>My name is {{ showMyName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "admin",
  data() {
    return {};
  },
  methods: {
    backHome() {
      console.log("back home");
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters(["result", "tenResult"]),
    showMyName() {
      return "phi";
    }
  }
};
</script>

<style scoped></style>
