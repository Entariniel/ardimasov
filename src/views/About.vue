<template>
<div class="about">
  <div class="videos">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/22Ry3v1zr3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/_1wFXYLL5Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/S9RcEUTEqYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/L5iTPNksEkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.videos {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>