<template>
	<HeroPage
    :heroData="{
      title: 'Academic Administrators',
      subtitle:
        'Do the work with intention not because of compulsion.<br/>Best wishes and blessings.',
    }"
  />

<Team :teamData='team' />

  
</template>

<script setup>
  import {ref} from 'vue';

  const team = ref([{
    userName: "Mrs. M. Kamatchi",
    userTitle: 'Co-ordinator Secondary Section',
    imageUrl:  "images/management/smb-secondary.jpg",
  }, {
      userName:'Mrs. K. Vetriselvi',
      userTitle: 'Co-ordinator Middle Section',
      imageUrl: "images/management/smb-middle.jpg",    
  },{
    userName: 'Mrs. F. Jubaitha Beevi',
    userTitle: 'Co-ordinator Primary Section',
    imageUrl: 'images/management/smb-primary.jpg',
  },
  

  ]);

</script>

<style scoped>

</style>
