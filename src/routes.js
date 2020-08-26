import Home from './components/user/HomeLayout.vue'
import Admin from './components/admin/AdminLayout.vue'
import Personal from './components/personal/PersonalLayout.vue'

export const routes = [
    {
        path: '/', name: 'homepage', component: Home
    },
    {
        path: '/:username', name: 'personal', component: Personal
    },
    {
        path: '/admin/:username', name: 'admin', component:Admin
    }
]