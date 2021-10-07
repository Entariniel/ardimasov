<template>
<div class="gallery">
    <PageTitle/>
    <div class="gallery__filter">
      <ul class="filter__list">
        <li class="filter__category">
            Все
        </li>
        <li class="filter__category">
          Портрет
        </li>
        <li class="filter__category">
          Пейзаж
        </li>
        <li class="filter__category">
          Натюрморт
        </li>
        <li class="filter__category">
          Графика
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import PageTitle from "../components/PageTitle";
export default {
  name: "Gallery",
  components: {PageTitle}
}
</script>

<style scoped>

</style>