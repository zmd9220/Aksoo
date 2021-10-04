<template>
  <div>
    <b-navbar variant="transparent" class="navbar-aksoo">
      <b-navbar-nav text-black font-weight="bold">
        <b-navbar-brand class="logo">
          <router-link to="/">
            <img src="@/assets/logo-pic.png" alt="logo" class="logo-pic" />
            <img src="@/assets/logo-kor.png" alt="logo-kor" class="logo-kor" />
          </router-link>
        </b-navbar-brand>
        <b-nav-item href="/"><span class="home">Home</span></b-nav-item>
        <b-nav-item href="/Start/"
          ><span class="learn">학습하기</span></b-nav-item
        >
        <b-nav-item href="/GamePage/"
          ><span class="play">게임하기</span></b-nav-item
        >
        <b-nav-item 
          ><span class="halloffame" @click='$router.push({ name: "RankingMain" })'>명예의전당</span></b-nav-item
        >

        <!-- Navbar dropdowns -->
        <div class="login">
          <span v-if="isLogin">
            <b-button class="logout-btn" href="">로그아웃</b-button>
          </span>

          <span v-else>
            <b-avatar
              v-b-toggle.collapse-1
              src="https://placekitten.com/300/300"
              class="avatar-user"
            ></b-avatar>
            <b-collapse id="collapse-1" class="user-collapse">
              <b-card class="card-text">
                <p><span class="nickname">하태린</span> 님</p>
                <b-button class="user-btn" href="" style="color: #f5785d;" @click="$router.push({ name: 'Profile'})">마이페이지</b-button>
                <b-button class="user-btn" href="">로그아웃</b-button>
              </b-card>
            </b-collapse>
            <b-button class="login-btn" href="/accounts/login/"
              >로그인</b-button
            >
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
.logo {
  position: absolute;
  left: 6%;
  top: 1rem;
}

.logo-pic {
  height: 40px;
  margin: 0.125rem 0.25rem 0.25rem 0rem;
  object-fit: contain;
}

.logo-kor {
  height: 37px;
  margin: 0.188rem 22.188rem 0.375rem 0.25rem;
  object-fit: contain;
}

.home {
  position: absolute;
  left: 32%;
  top: 1.688rem;
  height: 16px;
  margin: 0.125rem 6.313rem 0.313rem 0;
  object-fit: contain;
  font-family: BinggraeSamanco-Bold;
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
  position: absolute;
  left: 41%;
  top: 1.688rem;
  height: 23px;
  margin: 0.125rem 6.313rem 0.313rem 0;
  object-fit: contain;
  font-family: BinggraeSamanco-Bold;
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
  position: absolute;
  left: 50%;
  top: 1.688rem;
  height: 19px;
  margin: 0.125rem 6.313rem 0.313rem 0;
  object-fit: contain;
  font-family: BinggraeSamanco-Bold;
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
  position: absolute;
  left: 59%;
  top: 1.688rem;
  height: 20px;
  margin: 0.125rem 6.313rem 0.313rem 0;
  object-fit: contain;
  font-family: BinggraeSamanco-Bold;
  font-size: 1.594rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.61;
  letter-spacing: normal;
  text-align: center;
  color: #000;
}

.navbar-aksoo {
  /* display: flex; */
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  /* margin: 0 0 54.188rem; */
  /* padding: 0.813rem 11.938rem 0.813rem 13.063rem; */
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
  position: absolute;
  left: 80%;
  top: 1.688rem;
  height: 43px;
  width: 140px;
  /* margin: 0.8rem 0 0 18rem; */
  /* padding: 0.563rem 3.438rem 0.938rem 3.375rem; */
  object-fit: contain;
  background-color: #ffe7dd;
  color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco-Bold;
  font-size: 1.75rem;
  padding-top: 2px;
}

.avatar-user {
  position: absolute;
  left: 75%;
  top: 1.688rem;
  height: 43px;
}

.user-collapse {
  position: absolute;
  left: 72.5%;
  top: 120%;
  width: 20%;
  border-style: solid;
  border-color: #375993;
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index: 6;
}

.card-text {
  font-family: BinggraeSamanco;
  font-size: 3.5vh;
}

.nickname {
  color: #569bdc;
}

.user-btn {
  font-size: 3.5vh;
  margin-bottom: 20px;
  width: 80%;
  border-radius: 30px;
  background-color: #69ca95;
  border-style: none;
}

.logout-btn {
  position: absolute;
  left: 80%;
  top: 1.688rem;
  height: 43px;
  /* margin: 0.8rem 0 0 24.313rem;
  padding: 0.563rem 3.438rem 0.938rem 3.375rem; */
  object-fit: contain;
  background-color: #ffe7dd;
  border-color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco-Bold;
  font-size: 3.5vh;
  padding-top: 2px;
}
</style>