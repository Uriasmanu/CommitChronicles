<script setup lang="ts">
import BotoesIniciais from '@/assets/components/BotoesIniciais/BotoesIniciais.vue';
import ComponenteTerminal from '@/assets/shared/ComponenteTerminal/ComponenteTerminal.vue';
</script>

<template>
  <main class="w-screen h-screen flex items-center justify-center flex-col justify-evenly">
    <h1 class="text-3xl text-cyan-50 text-center">Bem-vindo ao CommitChronicles</h1>
    <ComponenteTerminal/>
    <div class="flex gap-5 sm:flex-row">
      <BotoesIniciais texto="Novo jogo"/>
      <BotoesIniciais texto="Continuar"/>
    </div>
  </main>
</template>