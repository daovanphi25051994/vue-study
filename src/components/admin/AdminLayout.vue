<template>
    <div>
        <h1>Admin page</h1>
        <button @click="backHome">Back Home</button>
    </div>
</template>

<script>
export default {
    name:'admin',
    data() {
        return {

        }
    },
    methods: {
        backHome() {
            console.log('back home')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>