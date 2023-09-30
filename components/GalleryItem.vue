<template>
        <v-container fluid>
          <v-row class="pt-6">

        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"

        v-for="(card, index) in galleryData"
        :key="index"
      >
        <v-card flat >
          <NuxtLink :to="`/gallery/${card.title}`">
            <v-img :src="card.url" height="160" cover> </v-img>
          </NuxtLink>
          <v-card-title>{{ card.title }}</v-card-title>
          
        </v-card>
      </v-col>
    </v-row>
        </v-container>
      
    
	
</template>

<script setup>
const { galleryData } = defineProps(["galleryData"]);	

</script>

<style scoped></style>