<template>
  <div id="app">
    <!-- 헤더 바 (로그인 여부에 따라 표기 다르게) -->
    <Header :isLogin="isLogin" @logout="logout" />
    <div id="nav">
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
      // 로그인 여부
      isLogin: false,
    };
  },
  methods: {
    // 로그아웃 기능
    logout: function () {
      this.isLogin = false;
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Login" });
    },
  },
  mounted: function () {
    // 토큰 존재 시 로그인으로 판단
    const token = localStorage.getItem("jwt");
    if (token) {
      this.isLogin = true;
    }
  },
};
</script>

<style>
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

/* 폰트 설치 */
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
