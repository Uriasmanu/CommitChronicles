<script setup lang="ts">
import ComponenteInput from '@/assets/shared/ComponenteInput/ComponenteInput.vue';
import ComponenteTerminal from '@/assets/shared/ComponenteTerminal/ComponenteTerminal.vue';
import { ref } from 'vue';
import axios from 'axios';

// Estado reativo para os comandos
const respostas = ref<string[]>([]);

// Função para adicionar um comando ao terminal
function adicionarRespostas(resposta: string) {
  if (resposta.trim() !== '') {
    respostas.value.push(resposta);
  }
}

// Função para enviar as respostas para o back-end
async function enviarRespostas() {
  try {
    // Extraindo informações específicas da lista de respostas
    const userName = respostas.value[0]?.match(/'([^']+)'/)?.[1]; // Captura o texto dentro das aspas simples
    const userEmail = respostas.value[1]?.match(/'([^']+)'/)?.[1]; // Captura o texto dentro das aspas simples

    // Verificando se as informações necessárias estão presentes
    if (!userName || !userEmail) {
      console.error('Nome ou email não encontrados nas respostas');
      return;
    }

    // Enviar as informações extraídas para a API
    const response = await axios.post('http://localhost:8081/api/Jogadores', {
      userName: userName,
      userEmail: userEmail,
    });

    adicionarRespostas('Respostas enviadas com sucesso!')
    console.log('Respostas enviadas com sucesso:', response.data);

  } catch (error) {
    console.error('Erro ao enviar as respostas:', error);

    if(axios.isAxiosError(error) && error.response?.status === 409) {
      // Verificando se o erro é um erro 409 e exibindo a mensagem no terminal
      adicionarRespostas('Jogador já existe!')
    } else {
      // Caso seja outro tipo de erro, exibe uma mensagem genérica
      adicionarRespostas('Erro desconhecido ao enviar as respostas.');
    }
  }
}
</script>

<template>
  <main class="w-screen h-screen flex items-center justify-center flex-col justify-evenly">
    <ComponenteTerminal bash="Primeira Missão: Configuração do Git" texto1="Para começar sua jornada, configure sua identidade com os comandos:"
      texto2="git config --global user.name 'Seu Nome'" texto3="git config --global user.email 'seuemail@exemplo.com'"
      v-bind:respostas="respostas" />

    <ComponenteInput @enviar-respostas="adicionarRespostas" />
    
    <!-- Botão que chama a função de enviarRespostas -->
    <button 
      @click="enviarRespostas"
      class="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600">
      Enviar
    </button>
  </main>
</template>
