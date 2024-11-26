<template>
  <div
    class="max-h-44 w-52 bg-[url('@/image/pergaminho.png')] bg-cover bg-center flex justify-center flex-col items-center p-8 text-center gap-2"
  >
    <h2>{{tituloDaTarefa}}</h2>
    <p>{{pequenaDescricaoDaMissao}}</p>
  </div>
</template>

<script setup lang="ts">
   defineProps({
    tituloDaTarefa: String,
    pequenaDescricaoDaMissao: String,
   })
</script>
