<template>
    <div>
        <h1>Personal page</h1>
        <p>My name is {{name}}</p>
        <p>age: 19</p>
    </div>
</template>

<script>
export default {
    name:'personalLayout',
    data() {
        return {
            name: this.$route.params.username
        }
    }
}
</script>

<style scoped>

</style>