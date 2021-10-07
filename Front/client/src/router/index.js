import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import AcidRainPage from '@/views/AcidRain/AcidRainPage'
import AcidRainMain from '@/views/AcidRain/AcidRainMain'
import AcidRainGame from '@/views/AcidRain/AcidRainGame'
import Header from '@/views/MainPage/Header'
import Footer from '@/views/MainPage/Footer'
import MainPage from '@/views/MainPage/MainPage'
import GamePage from '@/views/MainPage/GamePage'
import LearnStartPage from '@/views/Learn/LearnStart'
import LearnWordPage from '@/views/Learn/WordSelect'
import HangManMain from '@/views/HangMan/HangManMain'
import HangManGame from '@/views/HangMan/HangManGame'
import HangManPage from '@/views/HangMan/HangManPage'
import Learning from '@/views/Learn/Learning'
import CardflipHard from '@/views/Cardflip/CardflipHard'
import CardflipMiddle from '@/views/Cardflip/CardflipMiddle'
import CardflipEasy from '@/views/Cardflip/CardflipEasy'
import CardflipMain from '@/views/Cardflip/CardflipMain'
import Profile from '@/views/Profile/Profile'
import RankingMain from '@/views/Ranking/RankingMain'

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
    path: '/AcidRain/AcidRainPage',
    name: 'AcidRainPage',
    component: AcidRainPage,
    props: true,
  },
  {
    path: '/AcidRain/AcidRainMain',
    name: 'AcidRainMain',
    component: AcidRainMain,
  },
  {
    path: '/AcidRain/AcidRainGame',
    name: 'AcidRainGame',
    component: AcidRainGame,
  },
  {
    path: '/MainPage/Header',
    name: 'Header',
    component: Header,
  },
  {
    path: '/MainPage/Footer',
    name: 'Footer',
    component: Footer,
  },
  {
    path: '/Start',
    name: 'LearnStartPage',
    component: LearnStartPage,
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
    path: '/HangMan/HangManMain',
    name: 'HangManMain',
    component: HangManMain,
  },
  {
    path: '/HangMan/HangManGame',
    name: 'HangManGame',
    component: HangManGame,
  },
  {
    path: '/HangMan/HangManPage',
    name: 'HangManPage',
    component: HangManPage,
    props: true,
  },
  {
    path: '/Cardflip/CardflipHard',
    name: 'CardflipHard',
    component: CardflipHard,
  },
  {
    path: '/Cardflip/CardflipMiddle',
    name: 'CardflipMiddle',
    component: CardflipMiddle,
  },
  {
    path: '/Cardflip/CardflipEasy',
    name: 'CardflipEasy',
    component: CardflipEasy,
  },
  {
    path: '/Cardflip/CardflipMain',
    name: 'CardflipMain',
    component: CardflipMain,
  },
  {
    path: '/Profile/Profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Rangking/RankingMain',
    name: 'RankingMain',
    component: RankingMain,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
