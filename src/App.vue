<template>
    <div id="app">
        <app-header></app-header>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
    name: "App",
    components: {
        appHeader: Header
    },
    created() {
        this.$store.dispatch("initStocks");
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
