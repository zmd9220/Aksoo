<template>   
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="transparent">
        <b-navbar-nav>
          <span v-if="isLogin">
            <router-link :to="{ name: 'TodoList' }">Todo List</router-link> |
            <router-link :to="{ name: 'CreateTodo' }">Create Todo</router-link> |
            <router-link @click.native="logout" to="#">Logout</router-link>
          </span>
          <span v-else>
            <router-link :to="{ name: 'Signup' }">Signup</router-link> |
            <router-link :to="{ name: 'Login' }">Login</router-link> |
            <router-link :to="{ name: 'Acid_rain' }">Acid_rain</router-link> |
            <router-link :to="{ name: 'MainPage' }">MainPage</router-link>
          </span>
          <router-view @login="isLogin = true" />
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
