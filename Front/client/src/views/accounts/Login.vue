<template>
  <div>
    <!-- 배경 음악  -->
    <audio
      loop
      id="gameBgm"
      src="@/assets/music/bgm/Wavecont-Upbeat-Inspiring-Corporate-Full-Length.mp3"
    ></audio>
    <!-- 배경 사진 -->
    <img src="@/assets/gosm-login.png" class="gosm-login" />
    <img src="@/assets/shark-login.png" class="shark-login" />
    <img src="@/assets/deco-login.png" class="decoImg-login" />
    <!-- 왼쪽 배경 "로그인" -->
    <div class="imgLeft">
      <img src="@/assets/login.png" class="loginImg" />
    </div>
    <!-- 로그인 기능 화면 영역 -->
    <div class="signMain">
      <div style="font-size: 1.5rem; text-align: left; margin-top: 5%; font-weight: bold;">
        Sign In
      </div>
      <!-- 구글 로그인을 구현하려 하였지만 시간 부족 -->
      <div class="googleLogin">
        <!-- <button type="button" class="googleBtn">
          <img
            src="@/assets/googleLogo.png"
            alt=""
            style="margin: 1%; width: 20%; height: 90%"
          />
          구글로 로그인</button
        ><button type="button" class="googleBtn">
          <img
            src="@/assets/googleLogo.png"
            alt=""
            style="margin: 1%; width: 20%; height: 90%"
          />
          구글로 로그인
        </button> -->
      </div>
      <!-- 이메일/비밀번호 입력칸 -->
      <div class="group-field">
        <div class="input-group clearfix">
          <!-- 이메일 입력칸 -->
          <input
            id="email"
            name="email"
            type="text"
            inputmode="email"
            class=""
            v-model="credentials.email"
            placeholder="Email Address"
          />
        </div>
      </div>
      <div class="group-field">
        <div class="input-group">
          <!-- 비밀번호 입력칸 -->
          <input
            type="password"
            id="password"
            name="password"
            class=""
            v-model="credentials.password"
            style="display: block"
            placeholder="Password"
          /><input
            type="text"
            id="_password"
            name=""
            class=""
            placeholder=""
            value=""
            style="display: none"
          />
        </div>
      </div>
      <div>
        <!-- 로그인 버튼 -->
        <b-button class="button-normal larger" @click="login(credentials)" variant="primary">
          로그인
        </b-button>
      </div>

      <!-- 회원가입으로의 router -->
      <div class="group-field">
        <div style="color: #858484; text-align: left; float: left">계정이 없으신가요?</div>
        <a
          href="signup"
          style="color: #4285f4; float: left; text-decoration: none; margin-left: 1%;"
        >
          회원가입</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: "Signup",
  data: function () {
    return {
      // 입력받을 credential (이메일, 비밀번호) 정의
      credentials: {
        email: null,
        password: null,
      },
    };
  },
  // 화면이 켜졌을 때 음악이 나오도록
  mounted() {
    var gameBgm = document.getElementById("gameBgm");
    gameBgm.volume = 0.3;
    gameBgm.play();
  },
  methods: {
    // 로그인
    login: function () {
      axios({
        method: "post",
        url: SERVER_URL + "/accounts/signin/",
        data: this.credentials,
      })
        .then((res) => { // 로그인 기능 구현 및 토큰 추가
          console.log(res);
          this.$store.dispatch("userStore/loginUser", res.data);
          this.$emit("login");
          this.isLogin = true;
          this.$router.push({ name: "MainPage" });
          // test 용
          // this.$store.dispatch('userStore/loginUser', {email: "test2@gma.com", password: "test1"})
        })
        .catch((err) => {
          console.log(err);
          alert("아이디나 비밀번호를 확인해주세요.");
        });
    },
  },
  computed: { // vuex store에서 유저 정보, 토큰 받아오기
    ...mapState("userStore", ["accounts"]),
  },
};
</script>

<style>
.imgLeft {
  display: flex;
  z-index: -2;
  width: 49%;
  height: 90%;
  position: absolute;
  background-image: linear-gradient(to right, #fff, #fdf9e8);
}
.decoImg-login {
  left: 0px;
  top: 6%;
  object-fit: contain;
  margin: 3% 2%;
  width: 50%;
  height: 70%;
  z-index: 3;
  position: absolute;
}
.gosm-login {
  position: absolute;
  z-index: 2;
  width: 15%;
  left: 2.5%;
  top: 65%;
}
.shark-login {
  position: absolute;
  z-index: 2;
  width: 15%;
  left: 35%;
  top: 20%;
}
.loginImg {
  object-fit: contain;
  margin: 37.5% 10%;
  z-index: 4;
  width: 80%;
  height: 23%;
  position: absolute;
}
.signMain {
  display: flex;
  z-index: -1;
  width: 55%;
  height: 95%;
  right: 25px;
  top: 5%;
  position: absolute;
  border-radius: 7.63rem;
  background-color: #fff;
  padding: 3% 6%;
  flex-direction: column;
  float: center;
}
.googleLogin {
  width: 100%;
  height: 20%;
  font-size: 2vh;
}
.googleBtn {
  font-size: 90%;
  width: 28%;
  height: 35%;
  padding: 1%;
  margin: 8%;
  background-color: #fff;
  border-radius: 0.75rem;
  box-shadow: 0rem 0.19rem 0.38rem 0rem rgba(0, 0, 0, 0.4);
  border: solid 0.13rem #8c8c8c;
}
.input-group {
  width: 100%;
  height: 100%;
  padding: 3% 10%;
  border: 0px;
  margin: 1%;
  /* text-align: left; */
  /* border-bottom: 2px; */
}
#email {
  width: 90%;
  height: 100%;
  border: 0;
  border-bottom: 3px solid #868c93;
  margin: 2%;
}
#password {
  width: 90%;
  height: 100%;
  border: 0;
  border-bottom: 3px solid #868c93;
  margin: 2%;
}
#nickname {
  width: 90%;
  height: 100%;
  border: 0;
  border-bottom: 3px solid #868c93;
  margin: 2%;
}

.button-normal {
  margin: 5% 0 15% 0 !important;
  font-size: 110%;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  width: 20%;
  height: 4 0%;
  border-radius: 0.75rem;
  box-shadow: 0rem 0.19rem 0.38rem 0rem rgba(0, 0, 0, 0.4);
  color: white;
}

.account-wrapper .wrap_inner .group-field {
  position: relative !important;
}

.account-wrapper .wrap-form .group-field {
  text-align: left;
  left: 0px;
  min-height: 20.5px;
  margin-bottom: 10px;
  display: table;
  width: 100px;
}
.account-wrapper .mt10,
.account-wrapper .validation-check,
.account-wrapper .wrap-form .group-field .input-group .option-element,
.account-wrapper .wrap-form .group-field .input-group button {
  margin-top: 10px !important;
}
.account-wrapper .wp100,
.account-wrapper
  .wrap-form
  .group-field
  .input-group.button-group
  > div
  button {
  width: 100% !important;
}
.account-wrapper .wrap-form .group-field .input-group-label + .input-group {
  display: block;
}
</style>
