<template>
  <div id="app"  @click.once="hide" >
    <Preview v-if="!isHidden" />
      <div  v-if="isHidden">
        <Header/>
        <router-view></router-view>
      </div>
  </div>
</template>
<!--<template>-->
<!--  <div id="app" @click.once="hide">-->
<!--    <Preview v-if="!isHidden" />-->
<!--    <div  v-if="isHidden">-->
<!--      <Header/>-->
<!--      <router-view></router-view>-->

<!--    </div>-->


<!--  </div>-->
<!--</template>-->

<script>
import Preview from "./views/Preview";
import Header from "./components/Header";



export default {
  name: 'App',
  components: {
     Preview,
     Header,
  },
  data() {
    return {
      isHidden: false
    }
  },
  methods: {
    hide:  function () {
      this.isHidden = !this.isHidden
      this.$router.push('/home').catch(() => { '/home' })
    }
  }

}
</script>

<style>
@font-face {
  font-family: "BellotaBold";
  src: local("BellotaBold"), local("BellotaBold"),
  url("./assets/fonts/Bellota-Bold.ttf") format("truetype"),
  url("./assets/fonts/Bellota-Bold.woff") format("woff"),
  url("./assets/fonts/Bellota-Bold.woff2") format("woff2"),
  url("./assets/fonts/Bellota-Bold.svg") format("svg");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "BellotaRegular";
  src: local("BellotaRegular"), local("BellotaRegular"),
  url("./assets/fonts/Bellota-Regular.ttf") format("truetype"),
  url("./assets/fonts/Bellota-Regular.woff") format("woff"),
  url("./assets/fonts/Bellota-Regular.woff2") format("woff2"),
  url("./assets/fonts/Bellota-Regular.svg") format("svg");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "BellotaLight";
  src: local("BellotaLight"), local("BellotaLight"),
  url("./assets/fonts/Bellota-Light.ttf") format("truetype"),
  url("./assets/fonts/Bellota-Light.woff") format("woff"),
  url("./assets/fonts/Bellota-Light.woff2") format("woff2"),
  url("./assets/fonts/Bellota-Light.svg") format("svg");
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: "Segoe Print";
  src: local("Segoe-Print"), local("Segoe-Print"),
  url("./assets/fonts/Segoe-Print.ttf") format("truetype"),
  url("./assets/fonts/Segoe-Print.woff") format("woff"),
  url("./assets/fonts/Segoe-Print.woff2") format("woff2"),
  url("./assets/fonts/Segoe-Print.svg") format("svg");
  font-weight: 400;
  font-style: normal;
}



:root  {
  --font-color:  #d09683;
  --bg-button: #2d4262;
  --bg-menu: #363237;
  --bg-active-element: #73605b;

}

* {
 box-sizing: border-box;
}
.disableCaret{
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}
a {
  color: var(--font-color);
  transition: 0.3s;
  cursor:pointer;
}
a,
a:hover,
a:active {
  text-decoration: none;
  transition: 0.3s;
  cursor:pointer;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  height: 100vh;
  font-family: "Bellota-regular", sans-serif;
}
.container {
  margin: 0 auto;
  padding: 0 1em;
  max-width: 1440px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
