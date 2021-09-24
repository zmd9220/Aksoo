import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/views/todos/TodoList'
import CreateTodo from '@/views/todos/CreateTodo'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import Acid_rain from '@/views/acid_rain/acid_rain'
import Header from '@/views/MainPage/Header'
import MainPage from '@/views/MainPage/MainPage'
import GamePage from '@/views/MainPage/GamePage'
import LearnStartPage from '@/views/Learn/LearnStart'
import LearnSelectPage from '@/views/Learn/HandSelect'
import LearnWordPage from '@/views/Learn/WordSelect'
import Learning from '@/views/Learn/Learning'
import HangMan_vue from '@/views/HangMan_vue/HangMan_vue'
import cardflip from '@/views/Cardflip/cardflip'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/GamePage/',
    name: 'GamePage',
    component: GamePage,
  },
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
    path: '/Start',
    name: 'LearnStartPage',
    component: LearnStartPage,
  },
  {
    path: '/Select',
    name: 'LearnSelectPage',
    component: LearnSelectPage,
  },
  {
    path: '/WordSelect',
    name: 'LearnWordPage',
    component: LearnWordPage,
  },
  {
    path: '/Learn/Learning/:select',
    name: 'Learning',
    component: Learning,
    props: true,
  },
  {
    path: '/HangMan_vue/HangMan_vue',
    name: 'HangMan_vue',
    component: HangMan_vue,
  },
  {
    path: '/Cardflip/cardflip',
    name: 'cardflip',
    component: cardflip,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
