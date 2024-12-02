<template>
  <v-footer elevation="5" class="d-flex flex-column">
    <div class="d-flex flex-column w-100">
      <v-row dense>
        <v-col cols="12" sm="12" md="6" class="d-flex justify-center">
          <strong>¡Conéctate con nosotros en las redes sociales!</strong>
        </v-col>
        <v-col cols="12" sm="12" md="6" class="d-flex justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            class="mx-4"
            size="small"
            variant="plain"
          ></v-btn>
        </v-col>
      </v-row>

      <div class="text-center w-100">
        {{ new Date().getFullYear() }} — <strong>YourCam</strong>
      </div>
    </div>
  </v-footer>
</template>
<script setup lang="ts">
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
