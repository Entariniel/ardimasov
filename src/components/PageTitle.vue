<template>
  <div class="page-title">
    <h1 class="page-title__heading">
      {{ $route.meta.title }}
    </h1>
    <ul class="page-title__breadcrumbs">
      <li>
        <a href="#">
          Главная
        </a>
      </li>
      <li>
        <a href="#">
          {{ $route.meta.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "PageTitle"
}
</script>

<style scoped>

.page-title {
  background: url(../assets/flowers.jpg) no-repeat center;
  background-size: cover;
  color: #ffffff;
  padding: 7em 4em;
  font-family: "BellotaBold", sans-serif;
  text-align: center;
  position: relative;
}
.page-title:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #000000;
  -webkit-filter: opacity(45%);
  filter:  opacity(35%);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;

}
.page-title__heading {
  font-size: 65px;
  font-weight: bolder;
  z-index: 12;
  position: relative;
  margin: 0 0 10px;
}
.page-title__breadcrumbs {
  list-style-type: none ;
  z-index: 12;
  position: relative;
}
.page-title__breadcrumbs li {
  display: inline-block;
  margin: 0 10px 0 ;
}
.page-title__breadcrumbs li:hover {

}
.page-title__breadcrumbs li:after {
  display: inline-block;
  content: '>';
  font-size: 25px;
  padding-left: 10px;
}
.page-title__breadcrumbs li:last-child:after {
  display: none;
}
.page-title__breadcrumbs li a {
  font-size: 25px;
  color: #ffffff;
  font-family: "BellotaBold", sans-serif;
}
@media (max-width: 768px) { 
  .page-title__heading {
    font-size: 58px;
  }
}


</style>