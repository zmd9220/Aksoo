<template>
  <div>
    <b-navbar type="dark" variant="success">
      <b-navbar-nav>
        <b-navbar-brand href="/">Home</b-navbar-brand>

        <b-nav-item href="#" disabled>지문자연습</b-nav-item>
        <b-nav-item href="Acid_rain/Acid_rain">산성비게임</b-nav-item>
        <b-nav-item href="#" disabled>행맨게임</b-nav-item>
        <b-nav-item href="#" disabled>카드뒤집기게임</b-nav-item>
        <b-nav-item href="#" disabled>랭킹보기</b-nav-item>

        <!-- Navbar dropdowns -->

        <b-nav-item-dropdown text="👩‍💻" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
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

</style>