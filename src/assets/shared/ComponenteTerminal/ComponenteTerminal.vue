<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  texto1: string; 
  texto2: string;
  texto3: string;
}>();
</script>

<template>
    <div class="w-5/6 md:w-1/2">
        <h2 class="bg-gray-500 text-cyan-50 p-3 rounded-t">bash</h2>
        <div class="bg-black text-cyan-50 p-4 rounded-b">
            <p class="p-1">{{ props.texto1 }}</p>
            <p class="p-1">{{ props.texto2 }}</p>
            <p class="p-1">{{ props.texto3 }}</p>
        </div>
    </div>
</template>