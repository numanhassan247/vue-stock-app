<template>
    <div class="stock-div">
        <div>Stock : {{ stock.name }}</div>
        <div>Price : {{ stock.price }}</div>
        <div>Qty : {{ stock.quantity }}</div>
        <div>
            <input type="number" v-model="quantity" />
            <button
                @click="handleSellStock"
                :disabled="quantity<=0 || !Number.isInteger(Number(quantity) ) || insufQty"
            >{{ insufQty ? 'Not enough' : 'Sell' }}</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ["stock"],
    data() {
        return {
            quantity: 0
        };
    },
    computed: {
        insufQty() {
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            sellStock: "sellStock"
        }),

        handleSellStock() {
            const order = {
                id: this.stock.id,
                name: this.stock.name,
                price: this.stock.price,
                quantity: this.quantity
            };
            this.sellStock(order);
            this.quantity = 0;
        }
    }
};
</script>

<style scoped>
.stock-div {
    display: inline-block;
    border: blue solid 1px;
    margin: 10px;
}
</style>