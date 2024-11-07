<script setup lang="ts">
import BotoesIniciais from '@/assets/components/BotoesIniciais/BotoesIniciais.vue';
import ComponenteTerminal from '@/assets/shared/ComponenteTerminal/ComponenteTerminal.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateTo() {
  router.push({ name: 'home' })
}
const respostas = ref<string[]>([]);
</script>

<template>
  <main class="w-screen h-screen flex items-center justify-center flex-col justify-evenly">
    <h1 class="text-3xl text-cyan-50 text-center">Bem-vindo ao CommitChronicles</h1>
    <ComponenteTerminal bash="bash" texto1="Bem-vindo ao CommitChronicles, aventureiro!" texto2="Sua missão é dominar os comandos de Git enquanto explora o mundo de código. Enfrente
                desafios, avance por
                diferentes níveis e se torne um verdadeiro mestre das versões."
      texto3="Prepare-se para configurar sua identidade e registrar-se no reino do Git!"
      v-bind:respostas="respostas" /> 

    <div class="flex gap-5 sm:flex-row">
      <BotoesIniciais texto="Nova jornada" @click="navigateTo" />
      <BotoesIniciais texto="Continuar" />
    </div>
  </main>
</template>