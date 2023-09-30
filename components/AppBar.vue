<template>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list-item
      prepend-avatar="/images/smbmatriclogo.png"
      title="SMB Matric"
      subtitle="I Can & I Will"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list v-for="(item, index) in menuItems">
      <v-list-group v-if="item.subMenu" :value="item.title">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="item.icon"
            :title="item.title"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="(sublink, index) in item.subMenu"
          :key="index"
          :value="index"
          :to="sublink.route"
          :title="sublink.title"
        >
        </v-list-item>
      </v-list-group>

      <v-list-item
        v-else
        :key="index"
        :value="index"
        :to="item.route"
        :prepend-icon="item.icon"
        :title="item.title"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar class="d-flex justify-center" height="100" flat color="blue-grey-darken-3">
    <NuxtLink to="/">
      <v-img
        class="ml-6"
        :width="logo.width"
        rounded="0"
        :src="logo.url"
        alt="SMBM Logo"
      ></v-img>
    </NuxtLink>

    <v-spacer></v-spacer>

    <div v-for="(item, index) in menuItems" :key="index" :value="index">
      <v-menu v-if="item.subMenu" open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            class="d-none d-md-flex text-capitalize text-subtitle-1"
            v-bind="props"
            append-icon="mdi-chevron-down"
          >
            {{ item.title }}
          </v-btn> </template
        ><v-list>
          <v-list-item
            v-for="(sublink, index) in item.subMenu"
            :key="index"
            :value="index"
            :to="sublink.route"
          >
            <v-list-item-title>
              {{ sublink.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list></v-menu
      >
      <v-btn
        v-else
        class="d-none d-md-flex text-capitalize text-subtitle-1"
        :key="item.id"
        :to="item.route"
        >{{ item.title }}</v-btn
      >
    </div>

    <v-spacer></v-spacer>

    <div class="mr-6 d-none d-lg-flex">
      <v-btn
        icon
        v-for="(item, index) in socialIcons"
        target="_blank"
        :key="index"
        :href="item.href"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <v-tooltip activator="parent" location="bottom">{{
          item.title
        }}</v-tooltip>
      </v-btn>
    </div>

    <v-app-bar-nav-icon
      class="d-md-none"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const drawer = ref(null);

const socialIcons = ref([
  {
    title: "Facebook",
    icon: "mdi-facebook",
    href: "https://www.facebook.com/DNU-SMB-Matric-Hr-Sec-School-Dindigul-100881838364581/",
  },
  {
    title: "LinkedIn",
    icon: "mdi-linkedin",
    href: "https://www.linkedin.com/in/s-m-b-m-matric-hr-sec-school-2a50bb225",
  },
  {
    title: "YouTube",
    icon: "mdi-youtube",
    href: "https://www.youtube.com/c/SMBMMATRICDINDIGUL",
  },
  // {
  //   title: "Playstore",
  //   icon: "mdi-google-play",
  //   href: "https://play.google.com/store/apps/details?id=in.nirals.smbmmatric",
  // },
]);

const menuItems = ref([
  {
    title: "Home",
    route: "/",
    icon: "mdi-home",
  },
  {
    title: "About",
    subMenu: [
      { title: "Mission & Vision", route: "/mission-vision" },
      { title: "Introduction & History", route: "/intro-history" },
      { title: "Message", route: "/message" },
      { title: "School Management", route: "/management" },
      { title: "Academic Administrators", route: "/administrators" },
    ],
    icon: "mdi-information",
  },
  {
    title: "Academics",
    subMenu: [
      { title: "Curriculum", route: "/curriculum" },
      { title: "Courses", route: "/courses" },
      { title: "Facilities", route: "/facilities" },
    ],
    icon: "mdi-school",
  },
  {
    title: "News & Events",
    route: "/news-events",
    icon: "mdi-calendar",
  },
  {
    title: "Gallery",
    route: "/gallery",
    icon: "mdi-view-gallery",
  },
  {
    title: "Contact",
    route: "/contact",
    icon: "mdi-account-box",
  },
]);

const { smAndDown } = useDisplay();

const logo = computed(() => {
  if (smAndDown.value) {
    return { url: "/images/smbmatrictextlogo.png", width: 290 };
  } else {
    return { url: "/images/smbmatriclogo.png", width: 80 };
  }
});
</script>

<style scoped></style>
