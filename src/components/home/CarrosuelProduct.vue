<template>
  <div class="d-flex justify-center align-center">
    <h2 class="mt-5"><span>¡</span>Elige la Tuya<span>!</span></h2>
  </div>
  <swiper
    :effect="'coverflow'"
    :loop="true"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :autoplay="{
      delay: 3000, // Tiempo en milisegundos entre diapositivas
      disableOnInteraction: false, // Evita detener el autoplay al interactuar
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(product, i) in products" :key="i">
      <div class="container-product">
        <span>${{ product.price }} COP</span>
        <div>
          <p>{{ product.title }}</p>
        </div>
      </div>
      <img :src="product.src" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const modules = [Autoplay, EffectCoverflow, Pagination];

const products = [
  {
    title:
      "Cámara de seguridad Wi-Fi / Ethernet 3 Mpx robotizada con seguidor de movimiento para exterior",
    price: "299.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/21831edde/camara-de-seguridad-wi-fi-ethernet-3-mpx-robotizada-con-seguidor-de-movimiento-para-exterior.jpg",
  },
  {
    title:
      "Cámara de seguridad Wi-Fi Full HD robotizada con seguidor de movimiento",
    price: "179.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/2095447d6/camara-de-seguridad-wi-fi-full-hd-robotizada-con-seguidor-de-movimiento.jpg",
  },
  {
    title:
      "Cámara de seguridad Wi-Fi* 3 Mpx robotizada con seguidor de movimiento para socket",
    price: "199.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/2240871ee/camara-de-seguridad-wi-fi-3-mpx-robotizada-con-seguidor-de-movimiento-para-socket.jpg",
  },
  {
    title: "Cámara de seguridad Wi-Fi Full HD fija",
    price: "139.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/21410d857/camara-de-seguridad-wi-fi-full-hd-fija.jpg",
  },
  {
    title:
      "Cámara de seguridad Wi-Fi* / Ethernet 3 MPx robotizada con seguidor de movimiento",
    price: "219.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/218710522/camara-de-seguridad-wi-fi-ethernet-3-mpx-robotizada-con-seguidor-de-movimiento.jpg",
  },
  {
    title: "Cámara de seguridad Wi-Fi 3 Mpx fija para exterior tipo bala",
    price: "199.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/226648213/camara-de-seguridad-wi-fi-3-mpx-fija-para-exterior-tipo-bala.jpg",
  },
  {
    title: "Cámara de seguridad Wi-Fi Full HD fija con batería recargable",
    price: "379.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/218302b83/camara-de-seguridad-wi-fi-full-hd-fija-con-bateria-recargable.jpg",
  },
  {
    title:
      "Sistema de seguridad CCTV con DVR pentahíbrido de 12 canales, 4 cámaras, disco duro y monitoreo por Internet",
    price: "1.679.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/2265626ef/sistema-de-seguridad-cctv-con-dvr-pentahibrido-de-12-canales-4-camaras-disco-duro-y-monitoreo-por-internet.jpg",
  },
  {
    title:
      "Sistema de seguridad CCTV con DVR pentahíbrido de 6 canales, 4 cámaras, disco duro y monitoreo por Internet",
    price: "1.519.900",
    src: "https://www.steren.com.co/media/catalog/product/cache/92457bf2b5977fff7efe99bd6badebc6/image/22657aaef/sistema-de-seguridad-cctv-con-dvr-pentahibrido-de-6-canales-4-camaras-disco-duro-y-monitoreo-por-internet.jpg",
  },
];
</script>

<style scoped>
span {
  color: #ff9800;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  width: 100%;
}

.container-product {
  width: 100%;
  height: 100%;
  position: absolute;
  color: #fff;
  padding-left: 1rem;
}

.container-product div {
  position: absolute;
  background: linear-gradient(to bottom, transparent 0%, #000000 100%);
  bottom: 0;
  padding: 1rem;
}
</style>
