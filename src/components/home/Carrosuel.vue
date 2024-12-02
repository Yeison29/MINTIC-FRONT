<template>
  <v-carousel show-arrows="hover" continuous cycle>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
      <v-sheet height="100%" color="#00000059">
        <div class="d-flex fill-height justify-center align-end pb-15">
          <div class="container-slider">
            {{ item.description }}
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
const items = [
  {
    src: "https://8779058.fs1.hubspotusercontent-na1.net/hubfs/8779058/curso-videovigilancia-900x600.jpg",
    description:
      "Seguridad al alcance de tu mano. Protege tu hogar y negocio con cámaras de última tecnología.",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    description:
      "Vigilancia 24/7. Control total desde tu móvil, donde sea que estés.",
  },
  {
    src: "https://3b58f76fe1.cbaul-cdnwnd.com/1bfd568846b1da8704c5f9bb7f40c7eb/200000503-efc84efc86/camaras-de-seguridad-001_1.jpg?ph=3b58f76fe1",
    description:
      "La tranquilidad no tiene precio. Invierte en seguridad confiable hoy mismo.",
  },
  {
    src: "https://camarasdeseguridadchile.com/wp-content/uploads/2024/06/camaras-de-seguridad.jpg",
    description:
      "Con nuestras cámaras, cada rincón está protegido. ¡No más preocupaciones!",
  },
];
</script>

<style scoped>
.container-slider {
  border-radius: 20px;
  background-color: transparent;
  width: 500px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
}
</style>
