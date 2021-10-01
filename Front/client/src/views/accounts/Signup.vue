<template>
  <div>
    <img src="@/assets/deco.png" class="decoImg" />
    <div class="imgLeft">
      <img src="@/assets/signUp.png" class="signImg" />
    </div>
    <div class="signMain">
      <div style="font-size: 1.5rem; text-align: left">CREATE ACOUNT</div>
      <div class="googleLogin">
        <button type="button" class="googleBtn">
          <img
            src="@/assets/googleLogo.png"
            alt=""
            style="margin: 1%; width: 20%; height: 80%; margin-right: 5%"
          />
          구글로 로그인</button
        ><button type="button" class="googleBtn">
          <img
            src="@/assets/googleLogo.png"
            alt=""
            style="margin: 1%; width: 20%; height: 80%; margin-right: 5%"
          />
          구글로 로그인
        </button>
      </div>
      <div style="color: #868c93; text-decoration: underline">OR</div>

      <div class="group-field">
        <div class="input-group clearfix">
          <input
            id="email"
            name="email"
            type="text"
            inputmode="email"
            class=""
            value=""
            placeholder="Email Address"
          />
        </div>
      </div>
      <div class="group-field">
        <div class="input-group">
          <input
            type="password"
            id="password"
            name="password"
            class=""
            value=""
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
          <!-- <a
                        href=""
                        class=""
                        tabindex="-1"
                        style="
                          position: absolute;
                          top: 50%;
                          right: 6px;
                          margin-top: -17px;
                          padding: 4px 10px;
                          background: transparent;
                          border-radius: 2px;
                          color: rgb(0, 0, 0);
                          text-align: center;
                          text-decoration: none;
                          user-select: none;
                        "
                        ><i class="ico visible-eye-on"></i
                      ></a> -->
        </div>
      </div>
      <div class="group-field">
        <div class="input-group">
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="Nickname "
            value=""
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="button-normal larger disabled"
          disabled=""
          @click="login"
        >
          Sign In
        </button>
      </div>

      <div class="group-field">
        <div style="color: #858484; text-align: left; float: left">
          이미 계정이 있으신가요? &nbsp;
        </div>
        <div @click="login" style="color: #4285f4; float: left">로그인</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "Signup",
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
        passwordConfirmation: null,
      },
    };
  },
  methods: {
    login: function () {
      this.$router.push("/accounts/login");
    },
    signup: function () {
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/accounts/signup/",
        data: this.credentials,
      })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.imgLeft {
  display: flex;
  z-index: 1;
  width: 49%;
  height: 90%;
  position: absolute;
  background-image: linear-gradient(to right, #fff, #fdf9e8);
}
.decoImg {
  position: absolute;
  left: 0px;
  object-fit: contain;
  margin: 2.5% 4%;
  width: 50%;
  height: 75%;
  z-index: 3;
}
.signImg {
  object-fit: contain;
  margin: 37.5% 10%;
  z-index: 4;
  width: 80%;
  height: 23%;
  position: absolute;
}
.signMain {
  display: flex;
  z-index: 2;
  width: 55%;
  height: 90%;
  right: 0px;
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
  margin: 5% 0 10% 0;
  font-size: 110%;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  width: 20%;
  height: 4 0%;
  border-radius: 0.75rem;
  box-shadow: 0rem 0.19rem 0.38rem 0rem rgba(0, 0, 0, 0.4);
  background-color: #3a80f3;
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