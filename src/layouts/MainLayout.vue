<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-style="background-color:#3C4DAE;"
      :width="130"
    >
      <q-list class="full-height">
        <q-btn
          flat
          class="relative-position q-py-sm"
          no-caps=""
          :class="
            $route.name == 'Index' ? 'text-black active-color' : 'text-white'
          "
          to="/"
        >
          <div align="center" style="width:100%">
            <q-icon size="40px" name="fas fa-project-diagram"></q-icon>
          </div>
          <div align="center" style="width:100%" class="font-18">
            Project
          </div>
        </q-btn>
        <q-btn
          to="/Monitor"
          no-caps=""
          flat
          class="relative-position q-py-sm text-white"
          :class="
            $route.name == 'Monitor' ? 'text-black active-color' : 'text-white'
          "
        >
          <div align="center" style="width:100%">
            <q-icon size="40px" name="fas fa-chart-bar"></q-icon>
          </div>
          <div align="center" style="width:100%" class="font-18">
            Monitor
          </div>
        </q-btn>
        <q-btn
          to="/Login"
          no-caps=""
          flat
          class="absolute-bottom q-py-sm text-white"
          :class="
            $route.name == 'Login' ? 'text-black active-color' : 'text-white'
          "
        >
          <div align="center" style="width:100%">
            <q-icon size="40px" name="fas fa-sign-out-alt"></q-icon>
          </div>
          <div align="center" style="width:100%" class="font-18">
            Login As Admin
          </div>
        </q-btn>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view style="background-color:#202541" />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
  }
];

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
<style scoped>
.drawer-color {
  background-color: #3c4dae;
}
.active-color {
  background-color: #00bfab;
}
</style>
