<template>
  <HeroPage
    :heroData="{
      title: 'Our Management',
      subtitle:
        'Do the work with intention not because of compulsion.<br/>Best wishes and blessings.',
    }"
  />

<Team :teamData='team' />

  
</template>

<script setup>
  import {ref} from 'vue';

  const team = ref([{
    userName: "Mr. S. Anbu Selvan",
    userTitle: 'President',
    imageUrl:  "images/management/smb-president.jpg",
  }, {
      userName:'Mr. M. K. Paramasivam',
      userTitle: 'Correspondent & Secretary',
      imageUrl: "images/management/smb-correspondent.jpg",    
  },{
    userName: 'Mr. S. Saravanan',
    userTitle: 'Treasurer',
    imageUrl: 'images/management/smb-treasurer.jpg',
  },
  {
    userName: 'Mr. T. Leo Pradeep',
    userTitle: 'Vice President',
    imageUrl: 'images/management/smb-vice-president.jpg',
  },
  {
    userName: 'Mr. G. Jeyaraj Engineer',
    userTitle: 'Assistant Secretary',
    imageUrl: 'images/management/smb-assistant-secretary.jpg',
  },
  

  ]);

</script>

<style scoped>

</style>
