<template>
    <div>
        <h1>Home</h1>
        <div>Funds : {{ funds | currency}}</div>
    </div>
</template>

<script>
export default {
    name: "Home",
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
};
</script>

<style>
</style>