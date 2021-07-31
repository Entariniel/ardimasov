<template>
    <nav class="menu" v-scroll="handleScroll">
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

import Vue from "vue";

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

export default {
  name: "Menu",
  methods: {
    handleScroll: function (evt, el) {

      if (window.scrollY > 107) {
        el.classList.add('menu_fixed')

      }
      else if (window.scrollY <= 107 && el.classList.contains('menu_fixed')) {
        el.classList.remove('menu_fixed')

      }
    }
  },
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
.menu_fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  z-index: 1000;
  box-shadow: 0 3px 15px #2f2f2f;
  transition: all .3s;
}

.menu__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.menu__item  {
  display: inline-block;
  margin: 0 2.5em;
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
  padding: 1.4em 3em;
  font-size: 1.1em;
  font-family: "BellotaBold", sans-serif;
  text-transform: uppercase;
  z-index: 1;

  color: var(--font-color);
  text-decoration: none;
  transition: all .5s;
}

.menu__link:hover {
  color: var(--bg-menu);
  transition: all .5s;
}
.menu__link:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 1px;
  content: '.';
  color: transparent;
  background: var(--font-color);
  opacity: 0;
  z-index: -1;
  transition: all .5s;
}
.menu__link:hover:after{
  opacity: 1;
  visibility: visible;
  height: 100%;
  transition: all .5s;
}


</style>