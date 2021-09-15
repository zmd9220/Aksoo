<template>
  <div>
    <b-navbar variant="transparent" >
      <b-navbar-nav text-black font-weight="bold">
        <b-navbar-brand>
          <img src="https://pbs.twimg.com/media/DClMpmzXoAESvbt.jpg" alt="Kitten" width="100px">
        </b-navbar-brand>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="#" >둘러보기</b-nav-item>
        <b-nav-item href="/Learn/Start/">학습하기</b-nav-item>
        <b-nav-item href="#">게임하기</b-nav-item>
        <b-nav-item href="#" disabled>마이페이지</b-nav-item>

        <!-- Navbar dropdowns -->
        <div class="login">
          <span v-if="isLogin">
            <b-button class="logout-btn" href="">로그아웃</b-button>
          </span>

          <span v-else>
            <b-button class="login-btn" href="/accounts/login/">로그인</b-button>
          </span>
        </div>

      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.b-navbar {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.navbar-brand {
  
  margin-left: 2em;
  margin-right: 2em;
  align-self: center;
}

.nav-item {
  margin-right: 1em;
  align-self: center;
  font-weight: bold;
}

.login {
  position: absolute;
  right: 2em;
  align-self: center;
}

.login-btn {
  background-color: blueviolet;
}

.logout-btn {
  border: 0.1em;
  border-color:blueviolet;
}

</style>