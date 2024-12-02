<template>
    <v-sheet elevation="5" class="pr-15 pl-3">
        <div class="d-flex flex-column">
            <div class="d-flex w-100 align-center">
                <strong>¡Conéctate con nosotros en las redes sociales!</strong>

                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" size="small" variant="plain"></v-btn>
            </div>

            <div class=" text-center w-100">
                {{ new Date().getFullYear() }} — <strong>YourCam</strong>
            </div>
        </div>
    </v-sheet>
</template>
<script setup lang="ts">
const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
]
</script>