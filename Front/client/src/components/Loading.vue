<template>
    <div class="loading-wrapper">
        <figure class="swing">
            <img src="./croc.png" style="width: 80px" />
        </figure>  
        <br/>
      <div class="loading-message">
        <p>{{ message }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "Loading",

  props: {
    message: {
      type: String,
      default: "Loading...",
    },
  },

  data() {
    return {
      isFullPage: true,
      isLoading: true,
    };
  },
};
</script>

<style scoped>
.loading {
    text-align: center;
}
.loading-message {
    font-family: 'SDSamliphopangche_Basic';
}
.loading-wrapper {
    display: flex;
    flex-direction: column;
}
.swing {
    margin-top: 20%;
    margin-left: 40%;
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center -20px;
    float:left;

}
.swing img {
    display: block;
}
.swing:after{
    content: '';
    position: absolute;  
    width: 20px; height: 20px;  
    top: -10px; left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
}
 
@keyframes swing {
    0% { transform: rotate(3deg); }
    100% { transform: rotate(-3deg); }
}
</style>
