<template>
  <v-container fluid>
    <div class="title">
      <h2>Nuestros servicios</h2>
    </div>
    <v-row dense justify="center">
      <v-col cols="12" md="4" sm="6" v-for="(item, i) in items" :key="i">
        <v-card class="mx-auto" max-width="400" height="350">
          <v-img
            class="align-end text-white"
            height="200"
            :src="item.src"
            cover
          >
            <div class="cap-degradada">
              <v-card-title>{{ item.title }}</v-card-title>
            </div>
          </v-img>

          <v-card-text>
            <p>{{ item.description }}</p>
          </v-card-text>

          <v-card-actions class="d-flex justify-end action">
            <v-btn color="orange" text="Explorar"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Instalación profesional",
    src: "https://mydreamsacademy.org/wp-content/uploads/2021/09/3-ventajas-que-deben-aprovechar-de-las-camaras-de-seguridad.jpg",
    description:
      "Instalamos las cámaras en ubicaciones estratégicas de tu hogar o negocio, asegurando su correcta configuración y optimización para un rendimiento ideal.",
  },
  {
    title: "Monitoreo 24/7",
    src: "https://www.adt.com.mx/images/Blog/Sistema-monitoreo.jpg",
    description:
      "Permite a los clientes ver las imágenes de las cámaras en tiempo real desde cualquier dispositivo, con alertas inmediatas de eventos importantes.",
  },
  {
    title: "Mantenimiento y soporte",
    src: "https://img.freepik.com/fotos-premium/tecnico-caucasico-asegurando-seguridad-camaras-cctv-mantenimiento-preventivo-diligente-profesional_983420-231359.jpg",
    description:
      "Ofrecemos mantenimiento y soporte técnico para sistemas de cámaras de seguridad, asegurando su funcionamiento óptimo mediante revisiones, reparaciones y asistencia rápida.",
  },
  {
    title: "Integración con alarmas",
    src: "https://www.novaseguridad.com.co/wp-content/uploads/2023/08/tipos-de-camaras-wifi.jpg",
    description:
      "Integramos tus cámaras con alarmas y sensores para crear una solución de seguridad completa que te avise ante cualquier actividad sospechosa.",
  },
  {
    title: "Grabación en la nube",
    src: "https://sigmixv.com/wp-content/uploads/camaras-de-seguridad-IP-en-la-nube-1024x535.jpeg",
    description:
      "Ofrecemos almacenamiento en la nube para que puedas acceder a las grabaciones de tus cámaras en cualquier momento y desde cualquier lugar sin preocuparte por el espacio físico.",
  },
];
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

.action {
  position: absolute;
  right: 0;
  bottom: 0;
}

.cap-degradada {
  background: linear-gradient(to bottom, transparent 0%, #000000 100%);
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
