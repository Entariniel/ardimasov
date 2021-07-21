<template>
<div class="preview" >
  <router-link to="/home" class="preview__button">Олег Ардимасов</router-link>
</div>
</template>

<script>
export default {
  name: "Preview",
  methods:{
  }
}
</script>

<style scoped>
.preview {
  background: url("../assets/flowers.jpg") no-repeat center;
  background-size: cover;

  height: 100%;
  width: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #000000;
  -webkit-filter: opacity(45%);
  filter:  opacity(45%);
  position: absolute;

}

.preview__button {
  color: #ffffff;
  font-size: 4em;
  display: block;
  margin: 0;
  z-index: 100;
  text-shadow: 3px 2px 6px #53524d;
  border: none;
  background: transparent;
  font-family: "Segoe Print", sans-serif;
  transition: .3s;
}
.preview__button:hover {
  text-shadow: 3px 2px 6px #666410;
  transition: .3s;
}

</style>