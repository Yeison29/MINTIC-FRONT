<template>
  <v-card class="mx-auto" elevation="24">
    <v-carousel
      :continuous="false"
      :show-arrows="false"
      delimiter-icon="mdi-square"
      width="400"
      height="300"
      hide-delimiter-background
      cycle
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <v-card
              class="mx-auto text-white"
              color="black"
              height="300"
              prepend-icon="mdi-twitter"
            >
              <template v-slot:prepend>
                <v-img
                  width="30"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/800px-X_logo_2023_%28white%29.png"
                ></v-img>
              </template>

              <v-card-text class="text-h5 py-2">
                "{{ slide.comentario }}"
              </v-card-text>

              <v-card-actions>
                <v-list-item class="w-100">
                  <template v-slot:prepend>
                    <v-avatar
                      color="grey-darken-3"
                      :image="slide.avatar"
                    ></v-avatar>
                  </template>

                  <v-list-item-title>{{ slide.nombre }}</v-list-item-title>

                  <v-list-item-subtitle>Usuario</v-list-item-subtitle>

                  <template v-slot:append>
                    <div class="justify-self-end">
                      <v-icon class="me-1" icon="mdi-heart"></v-icon>
                      <span class="subheading me-2">{{
                        slide.reacciones
                      }}</span>
                      <span class="me-1">·</span>
                      <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                      <span class="subheading">{{ slide.compartidos }}</span>
                    </div>
                  </template>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script setup lang="ts">
const slides = [
  {
    comentario:
      "Estoy realmente impresionado con el servicio y la calidad de las cámaras. La instalación fue rápida y profesional, y ahora puedo monitorear mi hogar desde mi celular en cualquier momento. ¡Me siento mucho más seguro!",
    avatar:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
    nombre: "Andrés Gutiérrez",
    reacciones: 276,
    compartidos: 13,
  },
  {
    comentario:
      "Excelente experiencia desde el inicio. El equipo fue muy profesional, las cámaras tienen gran calidad y la opción de grabación en la nube es súper práctica. ¡Altamente recomendado!",
    avatar:
      "https://img.freepik.com/psd-gratis/renderizacion-3d-estilo-cabello-diseno-avatar_23-2151869153.jpg?t=st=1733087354~exp=1733090954~hmac=5cbd9852990a4f30fd0c1870444054104fe6bdb43569e2b2bce8f8c66739baf6&w=740",
    nombre: "Sofía Ramírez",
    reacciones: 206,
    compartidos: 9,
  },
  {
    comentario:
      "Estoy realmente impresionado con el servicio y la calidad de las cámaras. La instalación fue rápida y profesional, y ahora puedo monitorear mi hogar desde mi celular en cualquier momento. ¡Me siento mucho más seguro!",
    avatar:
      "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436178.jpg?t=st=1733087409~exp=1733091009~hmac=38362d99b429f322231a091b992c998a9438b42917de2bde7a137aabc9b90644&w=740",
    nombre: "Carlos Méndez",
    reacciones: 106,
    compartidos: 3,
  },
  {
    comentario:
      "Las cámaras funcionan perfectamente, y el monitoreo remoto es una maravilla. Ahora puedo viajar tranquilo sabiendo que mi negocio está protegido. ¡Un servicio de primera!",
    avatar:
      "https://img.freepik.com/psd-gratis/renderizacion-3d-estilo-cabello-diseno-avatar_23-2151869123.jpg?t=st=1733087474~exp=1733091074~hmac=7844377b330f5d1986163c03015e6b8f5f01cccd660332dcd7acc31f95b1b6f5&w=740",
    nombre: "Mariana López",
    reacciones: 300,
    compartidos: 30,
  },
  {
    comentario:
      "El sistema es fácil de usar y las cámaras tienen excelente resolución. Además, el soporte técnico respondió rápido cuando tuve una duda. ¡Muy satisfecho con mi compra!",
    avatar:
      "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-linea_23-2151303097.jpg?t=st=1733087750~exp=1733091350~hmac=9c1142797b004ed79cd8da2b1fc0b5d750cee17c85428a452b4508b991908a82&w=740",
    nombre: "Laura Fernández",
    reacciones: 245,
    compartidos: 5,
  },
];
</script>
