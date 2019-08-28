import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import signUp from '@/components/SignUp'
import userlist from '@/components/userList'
import list from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'

Vue.use(Router)

export const router = new Router({
    mode : 'history',
    routes:[
        {
            path : '/',
            name : 'home',
            component : home
        },
        {
            path : '/signUp',
            name : 'signUp',
            component : signUp
        },
        {
            path : '/login',
            name : 'login',
            component : login
        },
        {
            path : '/userlist',
            name : 'userlist',
            component : userlist
        },
        {
            path : '/list',
            name : 'list',
            component : list
        },
        {
            path : '/:id',
            name: 'show',
            component : Show
        }
    ]
})