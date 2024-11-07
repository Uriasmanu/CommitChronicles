<script setup lang="ts">
import ComponenteInput from '@/assets/shared/ComponenteInput/ComponenteInput.vue';
import ComponenteTerminal from '@/assets/shared/ComponenteTerminal/ComponenteTerminal.vue';
import { ref } from 'vue';

// Estado reativo para os comandos
const respostas = ref<string[]>([]);

// Função para adicionar um comando ao terminal
function adicionarRespostas(resposta: string) {
  if (resposta.trim() !== '') {
    respostas.value.push(resposta);

  }
}

</script>

<template>
  <main class="w-screen h-screen flex items-center justify-center flex-col justify-evenly">
    <ComponenteTerminal bash="Primeira Missão: Configuração do Git" texto1="Para começar sua jornada, configure sua identidade com os comandos:
" texto2="git config --global user.name 'Seu Nome'" texto3="git config --global user.email 'seuemail@exemplo.com'"
      v-bind:respostas="respostas" />

    <ComponenteInput @enviar-respostas="adicionarRespostas" />
  </main>
</template>
