<script setup>
  import Richtext from '@/components/atoms/Richtext.vue'

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <section class="relative bg-gray-100 py-12 lg:py-24 2xl:py-36 mb-1" v-editable="blok">
    <div class="relative container mx-auto z-10">
      <div class="lg:w-1/2 2xl:w-1/3">
        <Richtext :doc="blok.copy" />
      </div>
    </div>
    <img
      class="absolute inset-0 object-cover w-full h-full z-0"
      v-if="blok.backgroundImage"
      :src="blok.backgroundImage.filename"
      :alt="blok.backgroundImage.alt"
      tabindex="-1"
    />
  </section>
</template>
