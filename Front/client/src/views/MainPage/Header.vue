<template>
  <div>
    <!-- 헤더바 템플릿 -->
    <b-navbar variant="transparent" class="navbar-aksoo">
      <b-navbar-nav text-black font-weight="bold">
        <b-navbar-brand class="logo">
          <!-- 로고에 대한 router 설정 -->
          <router-link to="/">
            <img src="@/assets/logo-pic.png" alt="logo" class="logo-pic" />
            <img src="@/assets/logo-kor.png" alt="logo-kor" class="logo-kor" />
          </router-link>
        </b-navbar-brand>
        <!-- 서비스 설정 (홈, 학습, 게임, 명예의 전당) -->
        <b-nav-item href="/"><span class="home">Home</span></b-nav-item>
        <b-nav-item href="/Start/" :isLogin="isLogin" @logout="logout"
          ><span class="learn">학습하기</span></b-nav-item
        >
        <b-nav-item href="/GamePage/" :isLogin="isLogin" @logout="logout"
          ><span class="play">게임하기</span></b-nav-item
        >
        <b-nav-item 
          ><span
            class="halloffame"
            @click="
                  $router.push({ name: 'RankingMain', params: { whatgame: 1 } })
                "
            :isLogin="isLogin" @logout="logout" 
            >명예의전당</span
          ></b-nav-item
        >

        <!-- Navbar dropdowns -->
        <div class="login">
          <!-- 로그인 시 표시되는 프로필 -->
          <span v-if="isLogin">
            <img
              v-b-toggle.collapse-1
              :src='"@/assets/Profile/prf-" + profile_name[accounts.userId%7] +".png"'
              alt="profile_picture"
              class="avatar-user"
            />
            <b-collapse id="collapse-1" class="user-collapse">
              <b-card class="card-text">
                <p><span class="nickname">{{accounts.nickname}}</span> 님</p>
                <b-button
                  class="user-btn"
                  href=""
                  style="color: #f5785d"
                  @click="$router.push({ name: 'Profile' });"
                  >마이페이지</b-button
                >
                <b-button class="user-btn" @click.native="logout" href="#"
                  >로그아웃</b-button
                >
                {{this.profile_img}}
              </b-card>
            </b-collapse>
          </span>

          <!-- 로그아웃 상태일 시 로그인 버튼 활성화 -->
          <span v-else>
            <b-button class="login-btn" href="/accounts/login">로그인</b-button>
          </span>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import {mapState} from 'vuex'


export default {
  name: "Header",
  props: {
    isLogin: Boolean,
  },
  data() {
    return {
      profile_name: ['bird', 'cml', 'croc', 'ele', 'gsm', 'hippo', 'shark'],
      whatgame:1,
    }
  },
  methods: {
    // 로그아웃 기능
    logout: function () {
      this.$emit("logout");
    },
  },
  updated: function () {
    // 로그인 여부 확인
    console.log(this.$parent.isLogin);
  },
  computed: {
    // vuex store에서 계정 정보 받기
    ...mapState('userStore', ['accounts'])
  },
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
.home:hover {
  color: #f4775c;
}
.learn:hover {
  color: #f4775c;
}
.play:hover {
  color: #f4775c;
}
.halloffame:hover {
  color: #f4775c;
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
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
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
  left: 81%;
  top: 1.688rem;
  height: 50px;
  width: 50px;
  border-radius: 50%;
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
  object-fit: contain;
  background-color: #ffe7dd;
  border-color: #f5785d;
  border-style: none;
  border-radius: 30px;
  font-family: BinggraeSamanco-Bold;
  font-size: 1.75rem;
  padding-top: 2px;
}
</style>