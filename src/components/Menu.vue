<template>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <router-link to="/home" class="menu__link">Главная</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/about" class="menu__link">Обо мне</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/gallery" class="menu__link">Галерея</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: "Menu",
}
</script>

<style scoped>
.menu{
  color: var(--font-color);
  background: var(--bg-menu);
  padding: 0 2em;


  transition: 0.3s ease;

  display: flex;
  flex-direction: row;
  justify-content: center;

}

.menu__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.menu__item  {
  display: inline-block;
  margin: 0 4em;
}
.fade-enter-active,
.fade-leave-active {
  transition:  opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.menu__link {
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 1.4em;
  font-size: 1.1em;
  font-family: "BellotaBold", sans-serif;
  text-transform: uppercase;

  color: var(--font-color);
  text-decoration: none;
  transition: .3s;
}

.menu__link:hover {
  color: var(--bg-active-element);
  transition: .3s;
}

.menu__link:active {}

</style>