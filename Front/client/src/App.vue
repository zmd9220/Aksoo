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
        <router-link :to="{ name: 'MainPage' }">MainPage</router-link> |
        <router-link :to="{ name: 'GamePage' }">GamePage</router-link> |
        <router-link :to="{ name: 'LearnStartPage' }"
          >LearnStartPage</router-link
        >
        |
        <router-link :to="{ name: 'LearnSelectPage' }"
          >LeanSelectPage</router-link
        >
        |
        <router-link :to="{ name: 'LearnWordPage' }">LeanWordPage</router-link>
        <!-- | <router-link :to="{ name: 'HangManGame' }">HangManGame</router-link>  -->
        | <router-link :to="{ name: 'HangManPage' }">HangManPage</router-link> |
        <router-link :to="{ name: 'HangManMain' }">HangManMain</router-link> |
        <router-link :to="{ name: 'HangMan_vue' }">HangMan_vue</router-link> |

        <router-link :to="{ name: 'cardflip' }">cardflip</router-link> |
        <router-link :to="{ name: 'Halloffame' }">Halloffame</router-link> |
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

<style>
/* html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, BinggraeSamanco-Bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("/@/assets/mainpage.png");
  background-repeat: no-repeat;
  background-size: cover;
}

@font-face {
  font-family: "BinggraeSamanco-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/BinggraeSamanco-Bold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "BinggraeSamanco";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/BinggraeSamanco.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "GowunDodum-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "SDSamliphopangche_Basic";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Basic.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

#nav {
  padding: 30px;
  /* height: 867px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
