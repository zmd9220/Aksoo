<template>
  <div>

    <b-navbar variant="transparent" >
      <b-navbar-nav text-black font-weight="bold">
        <b-navbar-brand>
          <router-link to="/">
            <img src="@/assets/logo-pic.png" alt="logo" class="logo-pic">
            <img src="@/assets/logo-kor.png" alt="logo-kor" class="logo-kor">
          </router-link>
        </b-navbar-brand>
        <b-nav-item href="/"><img src="@/assets/home.png" alt="Home" class="home"></b-nav-item>
        <b-nav-item href="/Start/"><img src="@/assets/learn.png" alt="learn" class="learn"></b-nav-item>
        <b-nav-item href="#"><img src="@/assets/play.png" alt="play" class="play"></b-nav-item>
        <b-nav-item href="#"><img src="@/assets/halloffame.png" alt="halloffame" class="halloffame"></b-nav-item>

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
    <!-- <img src="@/assets/layer-2.png"
     class="Layer-2">
    <img src="@/assets/shape-2.png"
    class="Shape-2"> -->
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.logo-pic {
  height: 40px;
  margin: 0.63rem 0.25rem 0.125rem 6rem;
  object-fit: contain;
}

.logo-kor {
  height: 37px;
  margin: 0.63rem 22.188rem 0.25rem 0.25rem;
  object-fit: contain;
}

.home {
  height: 16px;
  margin: 0.63rem 6.313rem 0.313rem 0;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 1.594rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.learn {
  height: 23px;
  margin: 0.63rem 4.938rem 0 2.5rem;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 1.594rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.play {
  height: 19px;
  margin: 0.63rem 5rem 0.125rem 2.5rem;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 1.594rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.halloffame {
  height: 20px;
  margin: 0.63rem 0 0.063rem 2.5rem;
  object-fit: contain;
  font-family: BinggraeSamanco;
  font-size: 1.594rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.b-navbar {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 120rem;
  height: 70px;
  margin: 0 0 54.188rem;
  padding: 0.813rem 11.938rem 0.813rem 13.063rem;
  object-fit: contain;
  background-color: #fff;
}

.navbar-brand {
  
  margin-left: 2em;
  align-self: center;
}

.nav-item {
  margin-right: 1em;
  align-self: center;
  font-weight: bold;
}


.login-btn {
  height: 43px;
  margin: 0.8rem 0 0 18rem;
  padding: 0.563rem 3.438rem 0.938rem 3.375rem;
  object-fit: contain;
  background-color: #ffe7dd;
  color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco-Bold;
  font-size: 1.75rem;
  padding-top: 2px;
}

.logout-btn {
  height: 43px;
  margin: 0.8rem 0 0 24.313rem;
  padding: 0.563rem 3.438rem 0.938rem 3.375rem;
  object-fit: contain;
  background-color: #ffe7dd;
  border-color: #f5785d;
  border-style: none;
  border-radius: 30px;
}

/* img.Shape-2 {
  width: 119.938rem;
  height: 8.313rem;
  margin: 8.188rem 0 0;
  object-fit: contain;
}

img.Layer-2 {
  width: 119.938rem;
  height: 58.5rem;
  margin: 0 0 0 0.063rem;
  padding: 3.688rem 0 0;
  object-fit: contain;
} */

</style>