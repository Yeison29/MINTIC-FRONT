<template>
  <div>
    <!-- FAB Botón flotante -->
    <v-fab
      :icon="showComponent ? 'mdi-close' : 'mdi-message-text'"
      color="orange"
      elevation="6"
      location="bottom end"
      size="64"
      sticky
      app
      appear
      @click="toggleComponent"
    />
    <v-expand-transition>
      <div class="container-chat" v-if="showComponent">
        <v-card class="floating-card" elevation="8">
          <div class="d-flex ga-2 align-center pa-2">
            <v-avatar size="60" elevation="5">
              <v-img
                alt="John"
                src="https://img.freepik.com/vector-gratis/robot-vectorial-graident-ai_78370-4114.jpg"
              ></v-img>
            </v-avatar>
            <h3>BotCam</h3>
          </div>

          <div
            class="container-img-msg d-flex justify-space-between align-center ga-3"
          >
            <v-btn
              icon="mdi-restart"
              variant="plain"
              :disabled="loading"
              :loading="loading"
              @click="clearChatBot()"
            />
            <v-avatar size="60" elevation="5">
              <v-img
                alt="msg"
                src="https://png.pngtree.com/png-vector/20190827/ourlarge/pngtree-messages-icon-design-vector-png-image_1703820.jpg"
              ></v-img>
            </v-avatar>
          </div>
          <v-divider color="orange"></v-divider>

          <div class="chats" ref="chatContainer">
            <div v-for="(message, i) in messages" :key="i">
              <div class="msg" :class="i % 2 === 0 ? 'msg-res' : 'msg-send'">
                <div v-html="message.response"></div>
                <span class="date" v-if="message.response !== '...'">{{
                  new Date().toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })
                }}</span>
              </div>
            </div>
          </div>

          <div class="input px-1 pt-4 pb-1">
            <v-text-field
              v-model="input"
              label="Escribe aquí..."
              variant="outlined"
              outlined
              hide-details
              color="green"
              @keyup.enter="btnSend"
              :disabled="loading"
            />
            <v-btn
              icon="mdi-send"
              color="green"
              :disabled="loading"
              :loading="loading"
              @click="btnSend"
            />
          </div>
        </v-card>
      </div>
    </v-expand-transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, nextTick } from "vue";
import { sendChat, clearChat } from "@/services/bot/service";
import { resBot } from "@/interfaces/bot";

const showComponent = ref(false);
const loading = ref(false);
const input = ref<string | null>(null);
const messages = ref<resBot[]>([]);
const chatContainer = ref<HTMLDivElement | null>(null);

const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};

onMounted(async () => {
  scrollToBottom();
});

watch(showComponent, async () => {
  await validate();
});

const validate = async () => {
  if (showComponent.value && messages.value.length === 0) {
    await botSend();
  }
};

const botSend = async (msg: string | null = null) => {
  loading.value = true;
  if (msg !== null) {
    messages.value?.push({ response: msg });
  }
  messages.value?.push({ response: "..." });
  scrollToBottom();
  try {
    const response = await sendChat(msg);
    messages.value[messages.value.length - 1] = response;
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false;
    scrollToBottom();
  }
};

const btnSend = async () => {
  if (input.value !== null) {
    const msg = input.value;
    input.value = null;
    await botSend(msg);
  }
};

const clearChatBot = async () => {
  try {
    const response = await clearChat();
    restartChat();
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false;
    scrollToBottom();
    validate();
  }
};

const restartChat = () => {
  messages.value = [];
};

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};
</script>

<style scoped>
.floating-card {
  height: 70vh;
  width: 80vw;
  max-width: 400px;
}

.container-img-msg {
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
}

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
  bottom: 0;
  width: 100%;
  position: absolute;
}

.chats {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  height: calc(100% - 148px);
}

.msg {
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 1.2rem 1rem;
  max-width: 90%;
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: max-content;
}

.msg-res {
  background-color: #ffe0b2;
  border-bottom-right-radius: 30px;
}

.msg-send {
  background-color: #c8e6c9;
  border-bottom-left-radius: 30px;
  padding: 1rem 1rem 1.2rem 1rem;
  float: right;
}

.date {
  font-size: 8px;
  position: absolute;
  bottom: 5px;
}

.msg-res .date {
  right: 20px;
}

.msg-send .date {
  left: 20px;
}
</style>
