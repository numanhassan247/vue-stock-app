<template>
    <div class="stock-div">
        <div>Stock : {{ stock.name }}</div>
        <div>Price : {{ stock.price }}</div>
        <div>
            <input type="number" v-model="quantity" />
            <button
                @click="buyStock"
                :disabled="quantity<=0 || !Number.isInteger(Number(quantity) )  || insufFunds"
            >{{ insufFunds ? 'No funds' : 'Buy' }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["stock"],
    data() {
        return {
            quantity: 0
        };
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock() {
            const order = {
                id: this.stock.id,
                name: this.stock.name,
                price: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch("buyStock", order);
            this.quantity = 0;
        }
    }
};
</script>

<style scoped>
.stock-div {
    display: inline-block;
    border: red solid 1px;
    margin: 10px;
}
</style>