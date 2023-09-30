<template>
  <Head>
    <Title>SMB Matric Gallery | {{ id }}</Title>
  </Head>
  <HeroPage
    :heroData="{
      title: id,
      subtitle: 'Explore the Vibrant Moments of Learning and Creativity',
      imageUrl: '/images/hero/hero-gallery.jpg',
    }"
  />
  

  <v-container>
    
  
<v-breadcrumbs
      :items="items"
      divider="-"
      :to="items.to"
      bg-color="blue-grey-darken-1"
    ></v-breadcrumbs>

    

     <v-row class="pt-6">

        <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"

        v-for="(card, index) in data.images"
        :key="index"
      >
      
        <v-card flat >
          
            <v-img :src="card" height="160" cover>  <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="blue-grey-darken-3"
            ></v-progress-circular>
          </v-row>
        </template> </v-img>
          
          
          
        </v-card>
      </v-col>
    </v-row>

    
</v-container>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const { id } = useRoute().params;


const { data } = await useFetch('/api/getGalleryImages?gallery='+id.toLowerCase())

 
const items = ref([
        {
          title: 'Gallery',
          disabled: false,
          to: '/gallery',
        },
        {
          title: id,
          disabled: true,
          to: '#',
        },
        
      ]);
</script>

<style scoped></style>
