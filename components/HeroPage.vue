<template>
  <section id="hero"> 
  <v-sheet class="d-flex align-center" :height="300" color="#3aafa9">
    <v-container class="text-center">
      <v-responsive class="mx-auto" width="500">

        <h3 class="text-h3">{{ heroData.title }}</h3>

        <p class="mt-4 text-medium-emphasis">
          <span v-html=heroData.subtitle></span>
        </p>
      </v-responsive>
    </v-container>
  </v-sheet>
  </section>
</template>

<script setup>
const { heroData } = defineProps(["heroData"]);
</script>

<style scoped>

</style>
