<script setup lang="ts">
import BotoesIniciais from '@/assets/components/BotoesIniciais/BotoesIniciais.vue';
import ComponenteTerminal from '@/assets/shared/ComponenteTerminal/ComponenteTerminal.vue';
</script>

<template>
  <main class="w-screen h-screen flex items-center justify-center flex-col">
    <h1 class="text-3xl text-cyan-50">Bem-vindo ao CommitChronicles</h1>
    <ComponenteTerminal/>
    <div class="flex gap-5">
      <BotoesIniciais/>
      <BotoesIniciais/>
    </div>
  </main>
</template>