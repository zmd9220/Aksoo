<template>
  <div>
    <div class="account-wrapper">
      <div class="wrap_inner clearfix">
        <div class="wrap-form">
          <form>
            <fieldset>
              <div class="wrap-form">
                <div class="group-field">
                  <div class="input-group-label">
                    <label for="" class="mendantory">이메일</label>
                  </div>
                  <div class="input-group clearfix">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      inputmode="email"
                      class=""
                      value=""
                    />
                  </div>
                </div>
                <div class="group-field">
                  <div class="input-group-label">
                    <label for="" class="mendantory">비밀번호</label>
                  </div>
                  <div class="input-group">
                    <div style="position: relative' width: 100%">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class=""
                        placeholder=""
                        value=""
                        style="width: 100%; display: block"
                      /><input
                        type="text"
                        id="_password"
                        name=""
                        class=""
                        placeholder=""
                        value=""
                        style="width: 100%; display: none"
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
                    <ul class="validation-check">
                      <li>
                        <i class="ico check-small disabled"></i>영문, 숫자,
                        특수문자 2개 이상 조합
                      </li>
                      <li><i class="ico check-small disabled"></i>6~16자리</li>
                    </ul>
                  </div>
                </div>
                <div class="group-field">
                  <div class="input-group-label">
                    <label for="" class="mendantory">비밀번호 확인</label>
                  </div>
                  <div class="input-group">
                    <div style="position: relative">
                      <input
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        class=""
                        placeholder=""
                        value=""
                        style="width: 100%; display: block"
                      /><input
                        type="text"
                        id="_passwordConfirm"
                        name=""
                        class=""
                        placeholder=""
                        value=""
                        style="width: 100%; display: none"
                      /><a
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
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="group-field">
                  <div class="input-group-label">
                    <label for="">닉네임</label>
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      placeholder="실명은 사용하지 않는 것이 좋습니다. "
                      value=""
                    />
                  </div>
                </div>
                <div class="group-field">
                  <div class="input-group-label">
                    <label for="">성별</label>
                  </div>
                  <div class="input-group">
                    <div class="input-group clearfix">
                      <fieldset>
                        <input
                          name="gender"
                          id="M"
                          type="radio"
                          class="radio-button"
                          form="[object Object]"
                          value="M"
                        /><label for="M">남자</label
                        ><input
                          name="gender"
                          id="F"
                          type="radio"
                          class="radio-button"
                          form="[object Object]"
                          value="F"
                        /><label for="F">여자</label>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class="group-field">
                  <div class="input-group-label">
                    <label for="" class="mendantory">생년월일</label>
                  </div>
                  <div class="input-group">
                    <input
                      id="birthday"
                      name="birthday"
                      placeholder="yyyy/mm/dd"
                      autocomplete="on"
                      type="text"
                      class=""
                      value=""
                    />
                  </div>
                </div>
                <div class="group-field">
                  <div class="input-group checks">
                    <input id="checkOver14" type="checkbox" /><label
                      for="checkOver14"
                      ><small
                        >본인이 만 14세 이상임을 확인합니다.(필수)</small
                      ></label
                    >
                  </div>
                </div>
                <div class="group-field">
                  <div class="input-group button-group" style="display: block">
                    <div>
                      <button
                        type="submit"
                        class="button-normal larger disabled"
                        disabled=""
                        @click="login"
                      >
                        회원가입
                      </button>
                    </div>
                    <div>
                      <button
                        class="button-normal color-gray larger"
                        type="button"
                        @click="login"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
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
.account-wrapper .wrap_inner .group-field .input-group-label {
  position: relative !important;
}

.account-wrapper .wrap-form .group-field .input-group-label {
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