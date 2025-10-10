<template>
  <div
    class="relative w-full top-0 text-center bg-black pb-12 lg:pb-24 pt-24 lg:pt-32"
    v-editable="blok"
  >
    <div class="relative container mx-auto">
      <Typography class="text-white mb-1" variant="h1">{{ blok.heading }}</Typography>
      <Typography v-if="blok.text" class="text-secondary max-w-2xl mx-auto">{{
        blok.text
      }}</Typography>
    </div>

    <img
      src="/static/beach-footer.jpg"
      alt="Content Background"
      class="absolute inset-0 object-cover w-full h-full opacity-10"
    />
  </div>
</template>

<script setup>
  import Typography from '@/components/atoms/Typography.vue'

  const props = defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>
