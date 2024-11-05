<script setup lang="ts">
import ComponenteTerminal from '@/assets/shared/ComponenteTerminal/ComponenteTerminal.vue';


</script>

<template>
  <main class="w-screen h-screen flex items-center justify-center flex-col justify-evenly">
    <ComponenteTerminal bash="Primeira Missão: Configuração do Git" texto1="Para começar sua jornada, configure sua identidade com os comandos:
" texto2="git config --global user.name 'Seu Nome'" texto3="git config --global user.email 'seuemail@exemplo.com'" />
  </main>
</template>
