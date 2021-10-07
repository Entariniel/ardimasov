<template>
  <header class="header">
    <div class="header__top-line">
      <a href="/" class="logo">
        Олег Ардимасов
      </a>
    </div>
    <div class="header-bottom-line">
      <Menu />
    </div>
  </header>
</template>

<script>

import Menu from "./Menu";

export default {
  name: "Header",
  components: {
    Menu
  }
}
</script>

<style scoped>
.header {

}
.header__top-line {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 26px 20px 26px 20px;
}

.logo  {
  display: block;
  font-size: 30px;
  color: var(--bg-menu);
  text-decoration: none;
  font-weight: 400;
  user-select: none;
  font-family: "Segoe Print", sans-serif;
}

</style>