import Home from './components/user/HomeLayout.vue'
import Admin from './components/admin/AdminLayout.vue'

export const routes = [
    {
        path: '/', name: 'homepage', component: Home
    },
    {
        path: '/admin', name: 'admin', component:Admin
    }
]