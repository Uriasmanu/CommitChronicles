<template>
  <div
    class="min-h-56 max-h-96 w-56 bg-[url('@/image/pergaminho.png')] bg-cover bg-center flex  flex-col items-center px-8 py-4 text-center gap-2 text-xs justify-center"
  >
    <h2>{{ tituloDaTarefa }}</h2>
    <p>{{ pequenaDescricaoDaMissao }}</p>
    <p class="hidden">{{ comandoEsperado }}</p>
    <p class="hidden">{{ objetivo }}</p>
    <p>{{ pontosDeExperiencia }} xp</p>

<div class="checkbox-wrapper">
  <input
        type="checkbox"
        class="check"
        id="check1-61"
        :checked="statusConclusao"
        @change="$emit('update:statusConclusao', $event.target.checked)"
        disabled
      />
  <label for="check1-61" class="label">
    <svg width="45" height="45" viewBox="0 0 95 95">
      <rect
        x="30"
        y="20"
        width="50"
        height="50"
        stroke="black"
        fill="none"
      ></rect>
      <g transform="translate(0,-952.36222)">
        <path
          d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
          stroke="#cc2323"
          stroke-width="3"
          fill="none"
          class="path1"
        ></path>
      </g>
    </svg>
    <span><p>{{ statusConclusao ? 'Concluída' : 'Pendente' }}</p></span>
  </label>
</div>

  </div>
</template>

<script setup lang="ts">
defineProps({
  tituloDaTarefa: String,
  pequenaDescricaoDaMissao: String,
  comandoEsperado: String,
  objetivo: String,
  pontosDeExperiencia: Number,
  statusConclusao: Boolean, // Recebe o valor do componente pai
});
</script>

<style scoped>
/* From Uiverse.io by boryanakrasteva */ 
.checkbox-wrapper input[type="checkbox"] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper *,
.checkbox-wrapper ::after,
.checkbox-wrapper ::before {
  box-sizing: border-box;
  user-select: none;
}

.checkbox-wrapper {
  position: relative;
  display: block;
  overflow: hidden;
}

.checkbox-wrapper .label {
  cursor: pointer;
}

.checkbox-wrapper .check {
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
}

.checkbox-wrapper .label svg {
  vertical-align: middle;
}

.checkbox-wrapper .path1 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: 0.5s stroke-dashoffset;
  opacity: 1;
}

.checkbox-wrapper .check:checked + label svg g path {
  stroke-dashoffset: 0;
  opacity: 1;
}

</style>
