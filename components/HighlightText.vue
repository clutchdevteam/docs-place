<template>
  <div class="base-wrapper my-24 lg:my-36" v-editable="blok">
    <p class="text-lg lg:text-2xl text-gray-900-dark font-bold lg:text-center">
      {{ blok.text }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>
