<template>
    <div>
        <router-link to="/">Home</router-link>-
        <router-link to="/stocks">Stocks</router-link>-
        <router-link to="/profile">Profile</router-link>------
        <a @click="endDay">End Day</a>-
        <router-link to="/">Save Data</router-link>-
        <router-link to="/">Load Data</router-link>
        | Your Funds : {{ funds | currency }}
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Header",
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions(["randomizeStocks"]),
        endDay() {
            this.randomizeStocks();
        }
    }
};
</script>


<style>
</style>