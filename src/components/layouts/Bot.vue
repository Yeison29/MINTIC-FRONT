<template>
  <div>
    <!-- FAB Botón flotante -->
    <v-fab
      :icon="showComponent ? 'mdi-close' : 'mdi-message-text'"
      color="orange"
      elevation="6"
      class="mr-4"
      location="bottom end"
      size="64"
      sticky
      app
      appear
      @click="toggleComponent"
    />
    <v-expand-transition>
      <div class="container-chat" v-if="showComponent">
        <v-card class="floating-card" width="350" height="650" elevation="8">
          <div class="d-flex ga-2 align-center pa-2">
            <v-avatar size="60" elevation="5">
              <v-img
                alt="John"
                src="https://img.freepik.com/vector-gratis/robot-vectorial-graident-ai_78370-4114.jpg"
              ></v-img>
            </v-avatar>
            <h3>BotCam</h3>
          </div>
          <v-divider color="orange"></v-divider>

          <div class="chats">
            <div v-for="(message, i) in messages" :key="i">
              <div
                :class="i % 2 === 0 ? 'msg-res' : 'msg-send'"
                v-html="message.response"
              ></div>
            </div>
          </div>

          <div class="input pa-1">
            <v-text-field
              label="Escribe aquí..."
              variant="outlined"
              outlined
              hide-details
              color="orange"
            />
            <v-btn icon="mdi-send" color="orange" />
          </div>
        </v-card>
      </div>
    </v-expand-transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { startChat } from "@/services/bot/service";
import { resBot } from "@/interfaces/bot";

const showComponent = ref(false);
const loading = ref(false);
const messages = ref<resBot[]>([]);

const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};

watch(showComponent, async (newValue) => {
  if (newValue && messages.value.length === 0) {
    await botSend();
  }
});

const botSend = async () => {
  loading.value = true;
  messages.value?.push({ response: "<div>...</div>" });
  try {
    const response = await startChat();
    messages.value[messages.value.length - 1] = response;
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false;
  }
};
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

.chats {
  margin: 5px 0 5px 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  height: 507px;
}

.msg-res {
  font-size: 10px;
  background-color: #ffe0b2;
  border-radius: 2rem;
  padding: 1rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.msg-send {
  font-size: 10px;
  background-color: #c8e6c9;
  border-radius: 2rem;
  padding: 1rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
}
</style>
