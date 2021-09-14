<template>
  <div>
    <b-navbar type="dark" variant="success">
      <b-navbar-nav>
        <b-navbar-brand href="/">Home</b-navbar-brand>

        <b-nav-item href="#" disabled>지문자연습</b-nav-item>
        <b-nav-item href="/Acid_rain/Acid_rain/">산성비게임</b-nav-item>
        <b-nav-item href="#" disabled>행맨게임</b-nav-item>
        <b-nav-item href="#" disabled>카드뒤집기게임</b-nav-item>
        <b-nav-item href="#" disabled>랭킹보기</b-nav-item>

        <!-- Navbar dropdowns -->
        <div class="login">
          <span v-if="isLogin">
            <b-nav-item-dropdown text="👩‍💻" right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
              <b-dropdown-item href="#">logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </span>

          <span v-else>
            <b-nav-item href="/accounts/Login/"><b-button>로그인</b-button></b-nav-item>
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
  margin-right: 0.5em;
  align-self: center;
}

.login {
  position: absolute;
  top: 0;
  right: 2em;
}

</style>