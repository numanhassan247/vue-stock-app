import Home from './components/Home.vue'
import Stocks from './components/Stocks/Stocks.vue'
import Profile from './components/Profile/Profile.vue'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/stocks',
        component: Stocks
    },
    {
        path: '/profile',
        component: Profile
    },

]