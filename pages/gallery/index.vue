<template>
  <HeroPage
    :heroData="{
      title: 'Our School Gallery',
      subtitle: 'Explore the Vibrant Moments of Learning and Creativity',
    }"
  />

  <section class="bg-teal-lighten-5">
    <v-container>
      <v-tabs v-model="tab" color="blue-grey-darken-3" align-tabs="center" show-arrows>
        <v-tab class="text-capitalize" :value="academic">Academic Activities</v-tab>
        <v-tab class="text-capitalize" :value="events">Events and Celebrations</v-tab>
        <v-tab class="text-capitalize" :value="sports">Sports and Athletics</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="academic">
          <!-- Render Academic Gallery Here -->
          <GalleryItem :galleryData="galleryAcademic" />
        </v-window-item>
        <v-window-item :value="events">
          <!-- Render Events Gallery Here -->
          <GalleryItem :galleryData="galleryEvents" />
        </v-window-item>
        <v-window-item :value="sports">
          <!-- Render Sports Gallery Here -->
          <GalleryItem :galleryData="gallerySports" />
        </v-window-item>
      </v-window>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const tab = ref(null); // Set the default tab

const { galleryAcademic, galleryEvents, gallerySports } = await getGalleries();

async function getGalleries() {
  const academic = await useFetch('/api/getGalleries?category=academic');
  const events = await useFetch('/api/getGalleries?category=events');
  const sports = await useFetch('/api/getGalleries?category=sports');
  
  return { galleryAcademic: academic.data.value, galleryEvents: events.data.value, gallerySports: sports.data.value };
}

// Use the onMounted hook to fetch data when the component is mounted
onMounted(async () => {
  const { galleryAcademic, galleryEvents, gallerySports } = await getGalleries();
  
  // Set the gallery data for each tab
  galleryAcademic.value = galleryAcademic;
  galleryEvents.value = galleryEvents;
  gallerySports.value = gallerySports;
});
</script>

<style scoped></style>
