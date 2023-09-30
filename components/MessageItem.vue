<template>
	
	<v-sheet class="pt-10">
    <v-container>
  
      <v-row :class="[messageData.isReverse? 'flex-row-reverse': '']">
        <!-- Left Column for Text Content -->
        <v-col cols="12" md="7" lg="8">
          <div class="text-center text-md-left">
            <h2 class="text-h5 text-sm-h4 font-weight-bold">
              {{messageData.title}}
            </h2>

             
<v-card
    class="mx-auto bg-blue-grey-lighten-5 mt-6"
    flat
    max-width=600
  >

<v-card-text class="p-6">
      <v-row align="center" no-gutters>
        <v-col
          cols="2"
        >
          <v-icon
            color="blue-grey-darken-1"
            icon="mdi-format-quote-open"
            size="50"
          ></v-icon>
        </v-col>

        <v-col cols="10" class="">
          <blockquote class="text-subtitle-2 text-sm-subtitle-1">{{messageData.quote}}</blockquote>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

       
            <p class="mt-8">
            	<span v-html="messageData.message"></span>            
            </p>

   
          </div>
        </v-col>

        <!-- Right Column for Image, Name, and Subtitle -->
        <v-col cols="12" md="5" lg="4">
          <v-responsive class="mx-auto" :width='messageData.imageWidth'>
              <v-img
                :src='messageData.imageUrl'
              cover
              :max-width='messageData.imageWidth'
              
              />

            <v-list-item >
              <v-list-item-title class="text-h6 mt-4">
                {{messageData.userName}}
              </v-list-item-title>
              <v-list-item-subtitle class="pt-1">
                {{messageData.userTitle}}
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
const { messageData } = defineProps(["messageData"]);
</script>

