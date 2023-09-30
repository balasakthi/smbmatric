<template>
	<HeroPage
    :heroData="{
      title: 'Mission and Vision',
      subtitle:
        'Do the work with intention not because of compulsion.<br/>Best wishes and blessings.',
    }"
  />

        <MessageItem 
  :messageData="{
    title: 'Our Vision',
    quote: 'Respect, Tolerance, Inclusion And Excellence.',
    message: 'Our vision at S.M.B.M. Matric. Hr. Sec. School is to empower students to acquire, demonstrate, articulate and value knowledge and skills that will support them, as life-long learners, to participate in and contribute to the global world and practice the core values of the school.',
    userName: '',
    userTitle: '',
    imageUrl: 'images/vision.svg',
    imageWidth: 200,
  }"
/>


        <MessageItem 
  :messageData="{
    title: 'Our Mission',
    quote: 'Our focus is to provide a stimulating early learning and child care experience which promotes each child’s social, emotional, physical and cognitive development.',
    message: 'The SMBM prepares students to understand, contribute to, and succeed in a rapidly changing society, thus making the world a better and more just place. We will ensure that our students develop both the skills that a sound education provides and the competencies essential for success and leadership in the emerging creative economy. We will also lead in generating practical and theoretical knowledge that enables people to better understand our world and improve conditions for local and global communities.',
    userName: '',
    userTitle: '',
    imageUrl: 'images/mission.svg',
    imageWidth: 200,
    isReverse: true,
  }"
/>


</template>