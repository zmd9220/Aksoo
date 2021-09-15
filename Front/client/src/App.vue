<template>
  <div id="app">
    <Header />
    <div id="nav">
      <span v-if="isLogin">
        <router-link :to="{ name: 'TodoList' }">Todo List</router-link> |
        <router-link :to="{ name: 'CreateTodo' }">Create Todo</router-link> |
        <router-link @click.native="logout" to="#">Logout</router-link>
      </span>
      <span v-else>
        <router-link :to="{ name: 'Signup' }">Signup</router-link> |
        <router-link :to="{ name: 'Login' }">Login</router-link> |
        <router-link :to="{ name: 'Acid_rain' }">Acid_rain</router-link> |
        <router-link :to="{ name: 'HangMan' }">HangMan</router-link> |
        <router-link :to="{ name: 'MainPage' }">MainPage</router-link> |
        <router-link :to="{ name: 'LearnStartPage' }"
          >LearnStartPage</router-link
        >
        |
        <router-link :to="{ name: 'LearnSelectPage' }"
          >LeanSelectPage</router-link
        >
        |
        <router-link :to="{ name: 'LearnWordPage' }">LeanWordPage</router-link>
        |
        <router-link :to="{ name: 'Learning' }">Learning</router-link>
      </span>
      <router-view @login="isLogin = true" />
    </div>
  </div>
</template>

<script>
import Header from "./views/MainPage/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data: function () {
    return {
      isLogin: false,
    };
  },
  methods: {
    logout: function () {
      this.isLogin = false;
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Login" });
    },
  },
  created: function () {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.isLogin = true;
    }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("/@/assets/mainpage.png");
  background-repeat: no-repeat;
  background-size: cover;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
