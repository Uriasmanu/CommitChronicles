<template>
    <main class="w-full h-screen">
        <div
            class="h-[75vh] w-[600px] rounded-md border-8 border-brown-800 flex justify-between p-3 absolute top-20 left-0 ml-8 bg-brown-700 overflow-x-scroll overflow-y-hidden"
        >
            <MissoesInfos
                v-for="missao in missoes"
                :key="missao.titulo"
                :titulo-da-tarefa="missao.titulo"
                :pequena-descricao-da-missao="missao.descricao"
                :comando-esperado="missao.comandoEsperado"
                :objetivo="missao.objetivo"
                :pontos-de-experiencia="missao.pontosDeExperiencia"
                :status-conclusao="missao.statusConclusao"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
import axios from 'axios';
import MissoesInfos from '../MissoesInfos/MissoesInfos.vue';
import { ref, onMounted } from 'vue';

interface Missao {
  titulo: string;
  descricao: string;
  comandoEsperado: string;
  objetivo: string;
  pontosDeExperiencia: number;
  statusConclusao: boolean;
}

// Cria uma referência para armazenar os dados das missões
const missoes = ref<Missao[]>([]);

// Função para buscar os dados da API
const ListarMissoes = async () => {
    console.log('Iniciando requisição para buscar as missões...');
    
    try {
        // Fazendo a chamada para a API
        const response = await axios.get('http://localhost:8081/api/Missao');
        
        // Verificando o retorno da API
        console.log('Dados recebidos da API:', response.data);
        
        // Atribuindo os dados às missões
        missoes.value = response.data;
        
        // Verificando o estado das missões após o recebimento dos dados
        console.log('Missões atualizadas:', missoes.value);

    } catch (error) {
        // Log de erro caso a requisição falhe
        console.error('Erro ao buscar as missões:', error);
    }
};

// Busca os dados quando o componente é montado
onMounted(() => {
    console.log('Componente montado, iniciando a busca das missões...');
    ListarMissoes();
});
</script>
