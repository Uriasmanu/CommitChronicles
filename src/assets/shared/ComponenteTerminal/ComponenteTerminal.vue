<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    bash: string;
    texto1: string;
    texto2: string;
    texto3: string;
    respostas: string[];

}>();
</script>

<template>
    <div class="w-5/6 md:w-1/2 max-h-[400px] md:max-h-[350px] overflow-y-auto">
        <h2 class="bg-gray-500 text-cyan-50 p-3 rounded-t">{{ props.bash }}</h2>
        <div class="bg-black text-cyan-50 p-4 rounded-b">
            <p class="p-1">{{ props.texto1 }}</p>
            <p class="p-1">{{ props.texto2 }}</p>
            <p class="p-1">{{ props.texto3 }}</p>
            <p v-for="(resposta, index) in props.respostas" :key="index" class="p-1">{{ resposta }}</p>
        </div>
    </div>
</template>