import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/views/todos/TodoList'
import CreateTodo from '@/views/todos/CreateTodo'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import Acid_rain from '@/views/acid_rain/acid_rain'
import Header from '@/views/MainPage/Header'
import MainPage from '@/views/MainPage/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todos',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/todos/create',
    name: 'CreateTodo',
    component: CreateTodo,
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/acid_rain/acid_rain',
    name: 'Acid_rain',
    component: Acid_rain,
  },
  {
    path: '/MainPage/Header',
    name: 'Header',
    component: Header,
  },
  {
    path: '/MainPage/MainPage',
    name: 'MainPage',
    component: MainPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
