<template>
    <v-container fluid>
        <div class="title">
            <h2>Testimonios</h2>
        </div>
        <v-row dense>
            <v-col cols="12" xs="12" sm="4" v-if="display.width.value > 600">
                <div class="conatiner-img-test">
                    <v-img :src="imgTest" max-width="300"></v-img>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="8">
                <carrosuel-testimons />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const display = useDisplay()

import CarrosuelTestimons from "@/components/CarrosuelTestimons.vue"

const imgTest = new URL("@/assets/test.jpg", import.meta.url).href;

const items = [
    {
        title: 'Titulo 1',
        src: 'https://8779058.fs1.hubspotusercontent-na1.net/hubfs/8779058/curso-videovigilancia-900x600.jpg',
        description: 'sfsdsdsdfsdfsdff'
    },
    {
        title: 'Titulo 2',
        src: 'https://camarasdeseguridadchile.com/wp-content/uploads/2024/06/camaras-de-seguridad.jpg',
        description: 'sfsdsdsdfsdfsdff'
    },
    {
        title: 'Titulo 3',
        src: 'https://3b58f76fe1.cbaul-cdnwnd.com/1bfd568846b1da8704c5f9bb7f40c7eb/200000503-efc84efc86/camaras-de-seguridad-001_1.jpg?ph=3b58f76fe1',
        description: 'sfsdsdsdfsdfsdff'
    },
    {
        title: 'Titulo 4',
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        description: 'sfsdsdsdfsdfsdff'
    },
]
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
}
</style>