<template>

  <Carousels/>
  
  <Quote  :quoteData="{
    quote: 'எண்ணென்ப ஏனை எழுத்தென்ப இவ்விரண்டும்<br/>கண்ணென்ப வாழும் உயிர்க்கு.',
    author: 'குறள் எண்: 392'
  }"/>



<v-sheet class="py-16">
    <v-container>
      <v-row>
        <!-- Left Column for Text Content -->
        <v-col cols="12" md="7" lg="8">
          <div class="text-center text-md-left">
            <h2 class="text-h5 text-sm-h4 font-weight-bold">
              Welcome to SMB Matric.
            </h2>

            <p class="mt-8">
              Schooling is not all about books and classes; it’s about creating
              educated human beings and developing civilized, social, literate,
              and successful citizens of the future. D.N.U. SMBM Matric School
              has been pursuing this goal since its establishment. </p>
              <p class="mt-8"> We strive to
              provide a stimulating academic program to emphasize individual
              conscientiousness and respect individuality in its creative
              inference. Our school has a unique ethos, a rare quality of its
              own, which has been kept alive over time by many people.
            </p>

            <p class="mt-8">
              We instill in all students the ability to communicate freely and
              confidently. With utmost enthusiasm and sincerity, we invest in
              setting a trend of specialized education to enable them to thrive
              and succeed in the advanced and competitive world of tomorrow by
              creating the tech-savvies of today. We aim to create an environment
              where students can explore themselves and put forth a valiant
              effort.
            </p>
          </div>
        </v-col>

        <!-- Right Column for Image, Name, and Subtitle -->
        <v-col cols="12" md="5" lg="4">
          <v-responsive class="mx-auto" width=400>
              <v-img
                src="images/management/smb-correspondent.jpg"
              cover
              max-width=400
              />

            <v-list-item >
              <v-list-item-title class="text-h6 mt-4">
                M.K. Paramasivam
              </v-list-item-title>
              <v-list-item-subtitle class="pt-1">
                Yours Correspondent
              </v-list-item-subtitle>
            </v-list-item>
            </v-responsive>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-divider class="my-6" />
    </v-container>
  </v-sheet>





</template>

<script setup>
import { ref } from "vue";
const length = ref(3);
const window = ref(0);
</script>

<style scoped>
.kural {
  line-height: 1.6;
}
</style>
