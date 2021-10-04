<template>
  <div>
    <div id="__next">
      <div class="Toastify"></div>
      <div>
        <div class="account-wrapper">
          <div class="wrap_inner clearfix">
            <div class="wrap-form">
              <div>
                <div>
                  <form autocomplete="on">
                    <div class="group-field">
                      <div class="input-group clearfix">
                        <input
                          id="email"
                          name="email"
                          placeholder="이메일"
                          type="text"
                          inputmode="email"
                          class=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="group-field">
                      <div class="input-group clearfix">
                        <div style="position: relative; width: 100%">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            class=""
                            placeholder="비밀번호"
                            value=""
                            style="width: 100%; display: block"
                          /><input
                            type="text"
                            id="_password"
                            name=""
                            class=""
                            placeholder="비밀번호"
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
                          >
                             <i class="ico visible-eye-on"></i> 
                          </a> -->
                        </div>
                      </div>
                    </div>
                    <!-- <div class="captcha-hidden">
                      <div id="captchabox">
                        <div>
                          <div style="width: 304px; height: 78px">
                            <div>
                              <iframe
                                title="reCAPTCHA"
                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LczfhEaAAAAADMzOyaKuemSP4SdWRem1bFQ5ltn&amp;co=aHR0cHM6Ly9hY2NvdW50cy5tYWxhbmdtYWxhbmcuY29tOjQ0Mw..&amp;hl=ko&amp;type=image&amp;v=wxAi4AKLXL2kBAvXqI4XLSWS&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=l9xf4ydb2tgk"
                                width="304"
                                height="78"
                                role="presentation"
                                name="a-8c08ugao5wv"
                                frameborder="0"
                                scrolling="no"
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                              ></iframe>
                            </div>
                            <textarea
                              id="g-recaptcha-response"
                              name="g-recaptcha-response"
                              class="g-recaptcha-response"
                              style="
                                width: 250px;
                                height: 40px;
                                border: 1px solid rgb(193, 193, 193);
                                margin: 10px 25px;
                                padding: 0px;
                                resize: none;
                                display: none;
                              "
                            ></textarea>
                          </div>
                          <iframe style="display: none"></iframe>
                        </div>
                      </div>
                    </div> -->
                    <div class="group-field">
                      <div class="input-group mb10 mt10">
                        <button
                          class="button-normal larger wp100"
                          type="submit"
                        >
                          로그인
                        </button>
                      </div>
                    </div>
                    <div class="group-field">
                      <div class="input-group hr-line" style="display: block">
                        <a
                          class="primary-link p-right"
                          @click="Singup"
                          style="color: skyblue"
                          >회원가입</a
                        >
                        <a class="p-right" style="color: gray"
                          >계정이 없으신가요? &nbsp;</a
                        >
                      </div>
                    </div>
                  </form>
                </div>
                <!-- <div class="group-field mt20">
                  <div class="o-auth-login">
                    <button
                      type="button"
                      class="o-auth-button depth-1 type-google"
                    >
                      <span>Google 계정으로 로그인</span></button
                    ><button
                      type="button"
                      class="o-auth-button depth-1 type-facebook"
                    >
                      <span>Facebook 계정으로 로그인</span></button
                    ><button
                      type="button"
                      class="o-auth-button depth-1 type-more-list"
                    >
                      <span>다른 계정으로 로그인</span>
                    </button>
                    <div hidden="" class="o-auth-wrapper">
                      <button
                        type="button"
                        class="o-auth-button depth-2 type-edu"
                      >
                        <span>경기도교육청(MS) 계정으로 로그인</span></button
                      ><button
                        type="button"
                        class="o-auth-button depth-2 type-gne"
                      >
                        <span>교육청 통합(웨일) 계정으로 로그인</span></button
                      ><button
                        type="button"
                        class="o-auth-button depth-2 type-keries"
                      >
                        <span>온라인 교과서 선도학교로 로그인</span></button
                      ><button
                        type="button"
                        class="o-auth-button depth-2 type-naver"
                      >
                        <span>Naver 계정으로 로그인</span></button
                      ><button
                        type="button"
                        class="o-auth-button depth-2 type-dropbox"
                      >
                        <span>Dropbox 계정으로 로그인</span></button
                      ><button
                        type="button"
                        class="o-auth-button depth-2 type-classting"
                      >
                        <span>Classting 계정으로 로그인</span></button
                      ><button
                        type="button"
                        class="o-auth-button depth-2 type-apple"
                      >
                        <span>Apple로 로그인</span>
                      </button>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <script id="__NEXT_DATA__" type="application/json">
      {
        "dataManager": "[]",
        "props": {
          "initialI18nStore": {},
          "initialLanguage": null,
          "pageProps": {
            "query": { "redirect": "https://typing.malangmalang.com/" },
            "redirect": "https://typing.malangmalang.com/",
            "namespacesRequired": ["common"]
          }
        },
        "page": "/sign/in",
        "query": { "redirect": "https://typing.malangmalang.com/" },
        "buildId": "6ry_Xj1EGzJhWNum3QZDc",
        "dynamicBuildId": false,
        "runtimeConfig": {
          "DOMAIN": ".malangmalang.com",
          "DEV_PAGE": false,
          "URL": {
            "API": "https://api.malangmalang.com/space",
            "OAUTH": "/accounts/oauth2",
            "AUTH": "https://api.malangmalang.com/accounts/v1",
            "MALANG_HOME": "https://www.malangmalang.com",
            "MALANG_API": "https://api.malangmalang.com/common/v1",
            "SPACE_HOME": "https://space.malangmalang.com",
            "ACCOUNT_HOME": "https://accounts.malangmalang.com",
            "EDU_ACCOUNT_HOME": "https://edu-accounts.malangmalang.com",
            "EDU_SPACE_HOME": "https://edu.malangmalang.com"
          },
          "NAVER_ID": "SYh7sL78hKQsZYOus_LQ",
          "WHALE_ID": "JD5mrJigmx3zQZOaHgvp"
        }
      }
    </script> -->

    <div
      style="
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(204, 204, 204);
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
        position: absolute;
        transition: visibility 0s linear 0.3s, opacity 0.3s linear 0s;
        opacity: 0;
        visibility: hidden;
        z-index: 2000000000;
        left: 0px;
        top: -10000px;
      "
    >
      <div
        style="
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0px;
          left: 0px;
          z-index: 2000000000;
          background-color: rgb(255, 255, 255);
          opacity: 0.05;
        "
      ></div>
      <div
        class="g-recaptcha-bubble-arrow"
        style="
          border: 11px solid transparent;
          width: 0px;
          height: 0px;
          position: absolute;
          pointer-events: none;
          margin-top: -11px;
          z-index: 2000000000;
        "
      ></div>
      <div
        class="g-recaptcha-bubble-arrow"
        style="
          border: 10px solid transparent;
          width: 0px;
          height: 0px;
          position: absolute;
          pointer-events: none;
          margin-top: -10px;
          z-index: 2000000000;
        "
      ></div>
      <!-- <div style="z-index: 2000000000; position: relative">
        <iframe
          title="reCAPTCHA 보안문자"
          src="https://www.google.com/recaptcha/api2/bframe?hl=ko&amp;v=wxAi4AKLXL2kBAvXqI4XLSWS&amp;k=6LczfhEaAAAAADMzOyaKuemSP4SdWRem1bFQ5ltn&amp;cb=67d8nkqure5l"
          name="c-8c08ugao5wv"
          frameborder="0"
          scrolling="no"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
          style="width: 100%; height: 100%"
        ></iframe>
      </div> -->
    </div>
    <!-- <h1>Login</h1>
    <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="credentials.username" />
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="credentials.password" />
    </div>
    <button @click="login">로그인</button> -->
  </div>
</template>

<script>
import axios from "axios";

// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: "Login",
  data: function () {
    return {
      credentials: {
        username: null,
        passwords: null,
      },
    };
  },
  methods: {
    Singup: function () {
      this.$router.push("/accounts/signup");
    },
    login: function () {
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/accounts/api-token-auth/",
        data: this.credentials,
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem("jwt", res.data.token);
          this.$emit("login");
          this.$router.push({ name: "TodoList" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.account-wrapper .wrap_inner {
  width: inherit;
  padding: 0 12.5px 12.5px 12.5px;
}

.account-wrapper {
  padding-top: 50px;
}

.account-wrapper {
  position: absolute;
  display: table;
  width: 100%;
  height: 100%;
}

.account-wrapper .wrap_inner {
  margin: 0px auto;
  color: #555;
  white-space: normal;
  word-wrap: break-word;
}

.account-wrapper .wrap-form {
  min-width: 280px;
  padding-left: 10px;
  padding-right: 10px;
}
.account-wrapper .wrap-form {
  max-width: 400px;
}
.account-wrapper .wrap_inner .group-field .input-group {
  padding-left: 0px !important;
}

.account-wrapper input[type="text"],
.account-wrapper input[type="password"],
.account-wrapper input[type="tel"],
.account-wrapper input[type="date"],
.account-wrapper input[type="email"] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  background-color: #fff;
  border-radius: 100px;
  line-height: 25px;
  color: #555;
  border: 2px solid #d5d5d5;
  padding: 0 12.5px;
  height: 40px;
  font-size: 1.14286em;
  appearance: none;
  -webkit-appearance: none;
}

.account-wrapper input {
  font-family: inherit;
}

.account-wrapper input {
  vertical-align: middle;
  box-sizing: border-box;
}

.account-wrapper .wrap-form .group-field {
  position: relative;
  margin-bottom: 8.33333px !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.account-wrapper * {
  font-size: 13px;
  -webkit-text-size-adjust: none;
}

.account-wrapper .button-normal.larger {
  padding: 8.5px 50px;
  font-size: 1.14286em;
  font-weight: bold;
  line-height: 1.4em;
}

.account-wrapper .wrap_inner {
  margin: auto;
  display: table-cell;
  vertical-align: middle;
  padding-top: 15px;
  padding-bottom: 15px;
}

.account-wrapper .button-normal {
  border-radius: 100px;
  padding: 8.33333px 25px;
  border: 2px solid #5c49a7;
  font-size: 1.14286em;
  line-height: 1em;
  color: #fff;
  background-color: #5c49a7;
  text-decoration: none;
  min-height: 30px;
  white-space: nowrap;
}

.account-wrapper .checks input[type="checkbox"] + label {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  min-height: 24px;
  padding-left: 24px;
  line-height: 1.4em;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.account-wrapper a.gray-link:link {
  color: #666;
  border-bottom: 1px solid #666;
  padding-bottom: 1px;
  line-height: 1.2em;
  font-size: 1em;
}

.account-wrapper .wrap-form {
  margin: 0px auto;
  position: relative;
}
.account-wrapper .p-right,
.account-wrapper .wrap-form .group-field .input-group .type-bordered {
  float: right !important;
  display: inline-block;
}

.account-wrapper a.primary-link:link,
.account-wrapper a.link:link {
  color: #666;
  border-bottom: 1px solid #666;
  padding-bottom: 1px;
  line-height: 1.2em;
}

.account-wrapper .hr-line {
  border-top: 1px solid #b1b1b1;
  padding-top: 12.5px;
  width: 100%;
}

.account-wrapper .button-normal {
  vertical-align: middle;
  cursor: pointer;
  transition: background 250ms ease-in-out, border 250ms ease-in-out,
    transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-decoration: none;
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

.o-auth-button.depth-1 {
  border-radius: 5px;
  border-color: #b6b6b6;
  font-size: 16px;
  font-weight: 700;
}

.account-wrapper .wrap-form .group-field .input-group {
  text-align: left;
  height: inherit;
}

.input-group {
  position: relative;
  /* display: inline-flex; */
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
</style>