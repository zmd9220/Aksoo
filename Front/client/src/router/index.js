import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/views/todos/TodoList'
import CreateTodo from '@/views/todos/CreateTodo'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import Acid_rain from '@/views/acid_rain/acid_rain'
import Header from '@/views/MainPage/Header'
import MainPage from '@/views/MainPage/MainPage'
import LearnStartPage from '@/views/Learn/LearnStart'
import LearnSelectPage from '@/views/Learn/HandSelect'
import LearnWordPage from '@/views/Learn/WordSelect'
import Learning_cons from '@/views/Learn/Learning_cons'
import Learning_vows from '@/views/Learn/Learning_vows'
import Learning_words from '@/views/Learn/Learning_words'

import HangMan_vue from '@/views/HangMan_vue/HangMan_vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
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
    path: '/Learn/Learning_cons',
    name: 'Learning_cons',
    component: Learning_cons,
  },
  {
    path: '/Learn/Learning_vows',
    name: 'Learning_vows',
    component: Learning_vows,
  },
  {
    path: '/Learn/Learning_words',
    name: 'Learning_words',
    component: Learning_words,
  },

  {
    path: '/HangMan_vue/HangMan_vue',
    name: 'HangMan_vue',
    component: HangMan_vue,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
