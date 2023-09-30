<template>
  <v-carousel hide-delimiters show-arrows="hover" height="550" cycle>
    <v-carousel-item
      v-for="(item, index) in carouselImages"
      :key="index"
      :src="item.src"
      cover
    >
        

    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref } from "vue";
const carouselImages = ref([
  { src: "images/carousel/carousel-1.jpg" },
  { src: "images/carousel/carousel-2.jpg" },
  { src: "images/carousel/carousel-3.jpg" },
  { src: "images/carousel/carousel-4.jpg" },
  { src: "images/carousel/carousel-5.jpg" },
  { src: "images/carousel/carousel-6.jpg" },
]);
</script>

<style scoped></style>
