<template>
    <div>
        <h1>Profile</h1>
        <div>
            <app-stock v-for="(stock,key) in stocks" :key="key" :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import StockVue from "./Stock.vue";

export default {
    computed: {
        ...mapGetters({
            stocks: "profileStocks"
        })
    },
    components: {
        appStock: StockVue
    }
};
</script>

<style>
</style>
