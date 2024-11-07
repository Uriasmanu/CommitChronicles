<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['enviar-respostas']);
const resposta = ref('');
const comandoNomeEnviado = ref(false);
const comandoEmailEnviado = ref(false);

// Expressões regulares para validar os comandos com qualquer texto entre aspas
const regexUserName = /^git config --global user\.name '.+'$/;
const regexUserEmail = /^git config --global user\.email '.+@.+\..+'$/;

// Função para enviar o comando apenas se for válido
function enviar() {
    if (regexUserName.test(resposta.value.trim())) {
        comandoNomeEnviado.value = true;
        emit('enviar-respostas', resposta.value.trim());
        resposta.value = ''; // Limpa o campo de input
    } else if (regexUserEmail.test(resposta.value.trim())) {
        comandoEmailEnviado.value = true;
        emit('enviar-respostas', resposta.value.trim());
        resposta.value = ''; // Limpa o campo de input
    } else {
        alert("Por favor, insira um comando válido."); // Mensagem de alerta se o comando não for válido
    }
}
</script>

<template>
    <div class="flex gap-4">
        <!-- Input: Designation [h-12] & min-w-[12rem] -->
        <input v-if="!comandoNomeEnviado || !comandoEmailEnviado" v-model="resposta" @keydown.enter="enviar"
            class="h-12 w-full md:w-[25rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
            type="text" placeholder="escreva o comando" />

        <!-- Button: Submit [h-12], only visible if both commands are not sent -->
        <button v-if="!comandoNomeEnviado || !comandoEmailEnviado" @click="enviar"
            class="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
            Commitar
        </button>
    </div>
</template>
