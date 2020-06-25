const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, { id, quantity, price }) {
        const record = state.stocks.find(e => e.id == id)
        if (record) {
            record.quantity += quantity
        }
        else {
            state.stocks.push({
                id: id,
                quantity: quantity
            })
        }
        state.funds -= price * quantity
    },
    'SELL_STOCK'(state, { id, quantity, price }) {
        const record = state.stocks.find(e => e.id == id)
        if (record.quantity > quantity) {
            record.quantity -= quantity
        }
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += price * quantity
    }
}

const actions = {
    sellStock: ({ commit }, order) => {
        commit('SELL_STOCK', order)
    }
}

const getters = {
    profileStocks: (state, getters) => {
        return state.stocks.map(stock => {
            const found = getters.stocks.find(e => e.id == stock.id)
            if (found) {
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: found.name,
                    price: found.price
                }
            }
        })
    },
    funds: state => state.funds
}

export default {
    state,
    mutations,
    actions,
    getters
}