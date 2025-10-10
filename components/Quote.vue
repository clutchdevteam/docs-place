<template>
  <section v-editable="blok" class="relative py-12 lg:py-24 bg-black">
    <Stack class="container mx-auto max-w-3xl text-center text-white">
      <Typography variant="body-large" class="uppercase">What others say</Typography>
      <Stack space="small">
        <Typography variant="body-large" class="font-light">"{{ blok.quote }}"</Typography>
        <Typography variant="body-large">{{ blok.author }}</Typography>
      </Stack>
    </Stack>
    <img
      :src="blok.backgroundImage.filename"
      :alt="blok.backgroundImage.alt"
      class="absolute inset-0 object-cover w-full h-full opacity-15"
    />
  </section>
</template>

<script setup>
  import Typography from '@/components/atoms/Typography.vue'
  import Stack from '@/components/atoms/Stack.vue'

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>
