<template>
<div class="gallery">
    <PageTitle/>
    <div class="gallery__filter">
      <ul class="filter__list disableCaret">
        <li class="filter__category">
          <a href="#">
            Все
          </a>
        </li>
        <li class="filter__category">
          <a href="#">
            Портрет
          </a>
        </li>
        <li class="filter__category">
          <a href="#">
            Пейзаж
          </a>
        </li>
        <li class="filter__category">
          <a href="#">
            Натюрморт
          </a>
        </li>
        <li class="filter__category">
          <a href="#">
            Графика
          </a>
        </li>
      </ul>
    </div>
  <div class="gallery-block-container">
    <div class="gallery-block">
      <div v-for="img in galleryImgArray" :key="img.previewUrl" class="gallery-block__item">
        <img :src=getImage(img) alt="" class="gallery-block__image">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PageTitle from "../components/PageTitle";



export default {
  name: "Gallery",
  components: {
    PageTitle,
  },
  data() {
    return {
      galleryImgArray: [
         { url: 'T7A6658.jpg', previewUrl: 'preview/T7A6658.jpg'},
        { url: '20191209_112125-1.jpg', previewUrl: 'preview/20191209_112125-1.jpg' },
        { url: '20191209_111923-1.jpg', previewUrl: 'preview/20191209_111923-1.jpg' },
        { url: '20191209_111827(0)-1.jpg', previewUrl: 'preview/20191209_111827(0)-1.jpg' },
        { url: '20191209_111729-1.jpg', previewUrl: 'preview/20191209_111729-1.jpg' },
        { url: '20191209_111640-1.jpg', previewUrl: 'preview/20191209_111640-1.jpg' },
        { url: '20191209_111548-1.jpg', previewUrl: 'preview/20191209_111548-1.jpg' },
        { url: '20180103_114717-1.jpg', previewUrl: 'preview/20180103_114717-1.jpg' },
        { url: 'T7A6751.jpg', previewUrl: 'preview/T7A6751.jpg' },
        { url: '20161119_104603-1.jpg', previewUrl: 'preview/20161119_104603-1.jpg' },
        { url: '20161119_104802-1.jpg', previewUrl: 'preview/20161119_104802-1.jpg' },
        { url: '20180404_171457-1.jpg', previewUrl: 'preview/20180404_171457-1.jpg' },
        { url: 'T7A6698.jpg', previewUrl: 'preview/T7A6698.jpg' },
        { url: 'T7A6706.jpg', previewUrl: 'preview/T7A6706.jpg' },
        { url: '20180303_123313-1.jpg', previewUrl: 'preview/20180303_123313-1.jpg' },
        { url: 'T7A6700.jpg', previewUrl: 'preview/T7A6700.jpg' },
        { url: 'T7A6695.jpg', previewUrl: 'preview/T7A6695.jpg' },
        { url: 'T7A6707.jpg', previewUrl: 'preview/T7A6707.jpg' },
        { url: 'T7A6697.jpg', previewUrl: 'preview/T7A6697.jpg' },
        { url: '20161119_104732-1.jpg', previewUrl: 'preview/20161119_104732-1.jpg' },
        { url: 'T7A6705.jpg', previewUrl: 'preview/T7A6705.jpg' },
        { url: 'T7A6696.jpg', previewUrl: 'preview/T7A6696.jpg' },
        { url: 'T7A6693.jpg', previewUrl: 'preview/T7A6693.jpg' },
        { url: 'T7A6702.jpg', previewUrl: 'preview/T7A6702.jpg' },
        { url: 'T7A6683.jpg', previewUrl: 'preview/T7A6683.jpg' },
        { url: 'T7A6671.jpg', previewUrl: 'preview/T7A6671.jpg' },
        { url: 'T7A6691.jpg', previewUrl: 'preview/T7A6691.jpg' },
        { url: 'T7A6686.jpg', previewUrl: 'preview/T7A6686.jpg' },
        { url: 'T7A6687.jpg', previewUrl: 'preview/T7A6687.jpg' },
        { url: 'T7A6679.jpg', previewUrl: 'preview/T7A6679.jpg' },
        { url: 'T7A6685.jpg', previewUrl: 'preview/T7A6685.jpg' },
        { url: 'T7A6662.jpg', previewUrl: 'preview/T7A6662.jpg' },
        { url: 'T7A6663.jpg', previewUrl: 'preview/T7A6663.jpg' }
      ]
    }

  },
  methods: {
    getImage(pic) {
      return require('@/assets/gallery/' + pic.previewUrl);
    }
  }
}


</script>

<style scoped>


.gallery__filter {
  margin-top: 4em;
}
.filter__list {
}
.filter__category {
  list-style-type: none;
  display: inline-block;
  margin: 0 0.3em;
}
.filter__category a{
  display: block;
  padding: 0.5em 1em;
  color: var(--bg-menu);
  font-size: 20px;
  position: relative;

}
.filter__category a:after{
  display: block;
  content: "";
  height: 2px;
  width: 0;
  margin: 0.2em auto 0;
  bottom: 0;
  background: var(--bg-menu);
  transition: 0.5s;

}
.filter__category a:hover{
  color: var(--bg-active-element);
}
.filter__category a:hover:after,
.filter__category a:active:after,
.filter__category a:focus:after
{
  color: var(--bg-active-element);
  width: 90%;
  background: var(--bg-active-element);
  transition: 0.5s;
}
.gallery-block-container {
  margin: 0 auto;
  padding: 0 5em;
}

.gallery-block{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  margin: 4em auto 3em;



}

.gallery-block__item{
  border-radius: 0.3em;
}


.gallery-block__image {
  width: 100%;
  transition: 0.3s;
  border-radius: 0.3em;
  transform: scale(1);

}
.gallery-block__item:hover .gallery-block__image {
  transform: scale(1.02) ;
  transition: 0.5s;
}

@media (max-width: 1200px) {
 
}
@media (max-width: 992px) {
  .gallery-block-container {
    padding: 0 3em;
  }
  .gallery-block{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.8em;

}
}
@media (max-width: 768px) {
  .filter__category a{
    font-size: 19px;
    padding: 0.5em;
  }
  .gallery__filter {
    margin-top: 3em;
  }
  .gallery-block-container {
    padding: 0 2em;
  }
  .gallery-block{
  grid-gap: 0.5em;
  margin: 3em auto;

  }
}

@media (max-width: 576px) {
  
}

</style>