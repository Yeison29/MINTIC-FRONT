<template>
  <v-app-bar :elevation="3" scroll-behavior="hide">
    <template v-slot:prepend>
      <v-img width="50" :src="LogoUrl" />
    </template>

    <h1>YourCam</h1>

    <template v-slot:append>
      <v-btn icon="mdi-robot"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const LogoUrl = new URL("@/assets/logo.png", import.meta.url).href;
</script>

<style scoped>
.h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
