import Home from './components/user/HomeLayout.vue'
import Admin from './components/admin/AdminLayout.vue'
import Personal from './components/personal/PersonalLayout.vue'
import UserManagement from './components/admin/UserManagement.vue'
import PostManagement from './components/admin/PostManagement.vue'

export const routes = [
    {
        path: '/', name: 'homepage', component: Home
    },
    {
        path: '/:username', name: 'personal', component: Personal, beforeEnter: (to, from, next) => {
            const role = localStorage.getItem('role');
            if(role == 'USER'){
                next();
            }
        }
    },
    {
        path: '/admin/:username', name: 'admin', component:Admin, beforeEnter: (to, from , next) => {
            const role = localStorage.getItem('role');
            if(role == 'ADMIN'){
                next();
            }
        } ,children:[
            {            path:'users', name: 'user', component: UserManagement},
            {            path:'posts', name: 'posts', component: PostManagement}
        ]
    }
]