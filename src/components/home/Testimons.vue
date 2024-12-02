<template>
  <v-container fluid>
    <div class="title">
      <h2>Testimonios</h2>
    </div>
    <v-row dense>
      <v-col cols="12" xs="12" sm="4" md="6" v-if="display.width.value > 600">
        <div class="conatiner-img-test">
          <v-img :src="imgTest" max-width="300"></v-img>
        </div>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="8"
        md="6"
        class="d-flex justify-center align-center"
      >
        <div class="container-sliders">
          <carrosuel-testimons />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import CarrosuelTestimons from "@/components/home/CarrosuelTestimons.vue";

const display = useDisplay();

const imgTest = new URL("@/assets/test.jpg", import.meta.url).href;
</script>

<style scoped>
.title {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.conatiner-img-test {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-sliders {
  width: 100%;
  height: 100%;
  max-width: 700px;
  max-height: 500px;
}
</style>
