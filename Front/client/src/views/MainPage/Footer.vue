<template>
  <div>
    <!-- footer에 연락 정보, 이미지 출처 정보 표기 -->
    <span class="image-source">지문자 이미지 출처: 
      <a href="https://slowalk.com/" class="copyright-link">'슬로워크'</a> 
    </span>
    <span class="contact">Contact us: b306@ssafy.com</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    // 로그인에 대한 정보 전달
    isLogin: Boolean,
  },
};
</script>

<style scoped>

.contact {
  position: absolute;
  bottom: 1.5%;
  right: 1%;
  color: white;
  font-family: SDSamliphopangche_Basic;
}

.image-source {
  position: absolute;
  bottom: 1.5%;
  right: 45%;
  color: white;
  font-family: SDSamliphopangche_Basic;
}

.copyright-link {
  /* text-decoration: none; */
  color: white !important;
}

</style>