<template>
    <main class="w-full h-screen">
        <div
            class="h-[75vh] w-[600px] rounded-md border-8 border-brown-800 flex justify-between  p-3 absolute top-20 left-0 ml-8 bg-brown-700 overflow-x-scroll overflow-y-hidden">
            <MissoesInfos
                v-for="missao in missoes"
                :key="missao.id"
                :titulo-da-tarefa="missao.titulo"
                :pequena-descricao-da-missao="missao.descricao"
            />

        </div>
    </main>
</template>

<script setup lang="ts">
import axios from 'axios';
import MissoesInfos from '../MissoesInfos/MissoesInfos.vue';
import { ref, onMounted } from 'vue';

interface Missao {
  id: number;
  titulo: string;
  descricao: string;
}


// Cria uma referência para armazenar os dados das missões
const missoes = ref<Missao[]>([]);

// Função para buscar os dados da API
const ListarMissoes = async () =>{
    try {
        const response = await axios.get('http://localhost:8081/api/Missoes');
        missoes.value = response.data;
        } catch (error) {
            console.error(error);
            
    }
};

// Busca os dados quando o componente é montado
onMounted(ListarMissoes);
</script>