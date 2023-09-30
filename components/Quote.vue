<template>
  <v-row class="bg-light-blue-lighten-5">
    <v-col class="pt-10">
      <v-card class="mx-auto bg-light-blue-lighten-5" max-width="700" flat>
        
        <v-card-text class="py-0">
          <v-row align="center" no-gutters
            ><v-col cols="auto" sm="1" class="d-none d-sm-flex">
              <v-icon

                color="blue-grey-darken-1"
                icon="mdi-format-quote-open"
                size="60"
              ></v-icon>
            </v-col>
            <v-col cols="12" sm="11" class="text-subtitle-2 text-sm-subtitle-1">
             <blockquote class="pl-6"> 
              <span v-html=quoteData.quote></span>
             </blockquote>
            </v-col>
          </v-row>
        </v-card-text>

        <div class="d-flex pb-8 justify-end">
          <v-list-item density="compact" :class="[quoteData.author ? '': 'd-none']">
            <v-list-item-subtitle  >
              {{quoteData.author}}
            </v-list-item-subtitle>
          </v-list-item>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { quoteData } = defineProps(["quoteData"]);
</script>


<style scoped></style>
