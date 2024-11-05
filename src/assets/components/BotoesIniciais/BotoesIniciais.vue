<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  texto: string; // Define que a prop 'texto' é do tipo string
}>();
</script>

<template>
    <button class="text-cyan-50 p-3 rounded-md bg-cyan-600 w-[150px]">{{ props.texto }}</button>
</template>
