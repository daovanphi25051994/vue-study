<template>
    <div>
        <h1>Personal page</h1>
        <p>My name is {{name}}</p>
        <p>age: 19</p>
        <button @click="logout" >Logout</button>
        <p>reulst: {{ result }}</p>
    </div>
</template>

<script>
export default {
    name:'personalLayout',
    data() {
        return {
            name: this.$route.params.username
        }
    },
    methods: {
        logout() {
            localStorage.clear;
        }
    },
    computed: {
        result (){
            return this.$store.state.result
        }
    }
}
</script>

<style scoped>

</style>