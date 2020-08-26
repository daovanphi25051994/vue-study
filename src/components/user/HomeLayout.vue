<template>
    <div>
        <h1>Home page</h1>
        <p>My name is phi</p>
        <p>age: 19</p>
        <button @click='goPersonalPage'>Go Details</button>
    </div>
</template>

<script>
export default {
    name:'home',
    data() {
        return {
            
        }
    },
    methods: {
        goPersonalPage() {
            this.$router.push('/phidaovan')
        }
    }
}
</script>

<style scoped>

</style>