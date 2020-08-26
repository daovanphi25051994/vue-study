<template>
    <div>
        <h1>Post Management</h1>
        <p>this is a table post</p>
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