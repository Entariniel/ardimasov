<template>
  <div class="home">
    <div class="home-slider">
      <carousel
          :autoplay="true"
          :perPageCustom="[[320, 2],[768,  3],[1199, 4]]"
          :scrollPerPage="true"
          :paginationEnabled="false"
          :autoplayTimeout="3000"
          :loop="true"
      >
        <slide  v-for="slide in slides" :value="slide.img" :key="slide.title">
          <div class="image-preview">
            <img :src="slide.img" :alt="slide.title"  class="slide">
          </div>

        </slide>
      </carousel>
    </div>
    <div class="container">
      <div class="about-preview">
        <div class="about-preview__image-block">
        <div class="image-block__bg">
          <img src="../assets/self-portrait.jpg" alt="Автопортрет" class="image-block__image">
        </div>
      </div>
      <div class="about-preview__text-block">
        <h2 class="about-preview__heading">
          О себе
        </h2>
        <h3 class="about-preview__subtitle">
          Приветствую, дорогой читатель. Меня зовут Ардимасов Олег Иванович.
        </h3>
        <p>
          Я художник.<br>
          Заслуженный деятель искусств России.<br>
          Профессор МГХИ им. В.И. Сурикова.<br>
          В 1953 г. окончил Иркутское художественное училище (преподаватель А.П. Жибинов).<br>
          В 1958-1964 гг. учился в Московском Государственном Художественном Институте им В.И. Сурикова на факультете графики (мастерская профессора Кибрика Е.А.).<br>
          Член Союза Художников СССР с 1970 г.<br>
          Картины хранятся в ГМИИ им. А.С. Пушкина, Тульском художественном музее, Читинском художественном музее, Кемеровской областной картинной галерее.<br>
          Узнать обо мне подробнее можно, нажав на кнопку ниже.<br>
        </p>
        <router-link to="/about" class="about-preview__link">моя биография</router-link>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "Home",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      slides: [
        {
          title: "image 1", img: require('../assets/image_0.jpg')
        },
        {
          title: "image 2", img: require('../assets/image_1.jpg')
        },
        {
          title: "image 3", img: require('../assets/image_2.jpg')
        },
        {
          title: "image 4", img: require('../assets/image_3.jpg')
        },
        {
          title: "image 6", img: require('../assets/image_5.jpg')
        },
        {
          title: "image 7", img: require('../assets/image_6.jpg')
        },
        {
          title: "image 8", img: require('../assets/image_7.jpg')
        },
        {
          title: "image 9", img: require('../assets/image_8.jpg')
        }
      ],
    }

  }
}
</script>

<style scoped>
.home-slider  {
  background: #363237;

}

@media (max-width: 1200px) {
  
}
@media (max-width: 992px) {
  
}
@media (max-width: 768px) {
  
}
@media (max-width: 576px) {
  
}

.image-preview  {
  position: relative;
  padding-top: 112%; /* 16:9 Aspect Ratio */

}
.slide {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;


}

.about-preview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-column-gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 3em 0 2em;
  padding: 2em;
  font-family: "BellotaRegular", sans-serif;


}
.about-preview__image-block {
  padding: 1em;
  flex-shrink: 1;

}
.image-block__bg   {
  /*background: url("../assets/bg-image-block.png") no-repeat;*/
  /*background-size: contain;*/
}
.image-block__image {
  width: 85%;
}

.about-preview__text-block  {
  text-align: left;
  padding-right: 3em;
  color: var(--bg-active-element)
}
.about-preview__heading {
  font-family: "BellotaBold", sans-serif;
  font-size: 4em;
  margin: 0 0 0.2em 0;
}
.about-preview__subtitle {
  font-size: 25px;
  margin: 0 0 27px ;
}
.about-preview__text-block p {
    font-size: 22px;
    margin: 27px  0;
}
.about-preview__link {
    font-size: 20px;
    border: 4px  solid  var(--font-color);
    padding: 1em 1em;
    display: inline-block;
    margin: 1em 0 0;
    font-family: "BellotaBold", sans-serif;
    font-weight: 800;

    position:relative;
    z-index: 1;
    text-transform: uppercase;
    transition: all .5s;
}

.about-preview__link:hover {
  color: var(--font-color);
  transition: all .5s;
  border-color:  var(--bg-active-element);
}
.about-preview__link:after {
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
  background: var(--bg-active-element);
  opacity: 0;
  z-index: -1;
  transition: all .5s;
}
.about-preview__link:hover:after{
  opacity: 1;
  visibility: visible;
  height: 100%;
  transition: all .5s;
}

</style>