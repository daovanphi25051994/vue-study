<template>
  <div>
    <h1>User Management</h1>
    <p>this is a table user</p>
    <button @click="plusOne">User +1</button>
    <button @click="minasOne">User -1</button>
    <button @click="twoPlus" >reulst +2</button>
     <button @click="minusTwo" >reulst -2</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "admin",
  data() {
    return {};
  },
  methods: {
    backHome() {
      console.log("back home");
      this.$router.push("/");
    },
    plusOne() {
      this.$store.state.result++;
    },
    minasOne() {
      this.$store.state.result--;
    },
    twoPlus(){
        this.$store.commit('plusTwo', 2)
    },
    ...mapMutations([
        'minusTwo'
    ])
  }
};
</script>

<style scoped></style>
