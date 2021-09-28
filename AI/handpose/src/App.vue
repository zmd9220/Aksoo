<template>
  <div id="app">
    <template v-if="!modelLoaded">
      <loading message="👋 Loading hand detection model..." />
    </template>

    <!-- <camera
      v-show="modelLoaded && !minimizeCamera"
      @on-loaded="modelLoaded = true"
      @on-minimize="minimizeCamera = true"
    /> -->

    <camera
      v-show="modelLoaded && !minimizeCamera"
      @on-loaded="modelLoaded = true"
      @on-minimize="minimizeCamera = true"
    />

    
  </div>
</template>

<script>
// import Camera from "@/components/Camera.vue";
import Camera from "@/components/Camera.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "App",

  components: {
    // Camera,
    Camera,
    Loading,
  },

  data() {
    return {
      modelLoaded: false,
      minimizeCamera: false,
    };
  },
  
};
</script>

<style>
</style>
