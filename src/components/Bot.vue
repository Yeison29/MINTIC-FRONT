<template>
    <div>
        <!-- FAB Botón flotante -->
        <v-fab :icon="showComponent ? 'mdi-close' : 'mdi-message-text'" color="orange" elevation="6" class="mr-4"
            location="bottom end" size="64" fixed app appear @click="toggleComponent" />
        <v-expand-transition>
            <div class="container-chat" v-if="showComponent">

                <v-card class="floating-card" width="300" height="400" elevation="8">
                    <div class="d-flex ga-2 align-center pa-2">
                        <v-avatar size="60" elevation="5">
                            <v-img alt="John"
                                src="https://img.freepik.com/vector-gratis/robot-vectorial-graident-ai_78370-4114.jpg"></v-img>
                        </v-avatar>
                        <h3>BotCam</h3>
                    </div>
                    <v-divider color="orange"></v-divider>


                    <div class="input pa-1">
                        <v-text-field label="Escribe aquí..." variant="outlined" outlined hide-details color="orange"
                            v-model="inputValue" />
                        <v-btn icon="mdi-send" color="orange" />
                    </div>
                </v-card>
            </div>
        </v-expand-transition>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Variable reactiva para controlar la visibilidad del componente
const showComponent = ref(false)

// Método para alternar la visibilidad
const toggleComponent = () => {
    showComponent.value = !showComponent.value
}
</script>


<style scoped>
.container-chat {
    position: fixed;
    z-index: 1;
    right: 3rem;
    bottom: 5rem;
}

.input {
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
