<template>
    <div>
        <h1>Admin page</h1>
        <router-link to="/admin/phi/users">User Management</router-link>
        <router-link to="/admin/phi/posts">Post Management</router-link>
        <router-view/>
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