<template>
  <AppBar />

  <router-view />

  <bot />
  <footer-componet />
</template>

<script setup lang="ts">
import AppBar from "@/components/layouts/AppBar.vue";
import FooterComponet from "@/components/layouts/FooterComponet.vue";
import Bot from "@/components/layouts/Bot.vue";
</script>

<style scoped></style>
