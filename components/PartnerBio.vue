<template>
  <div
    v-if="blok.imageRight"
    class="container mx-auto my-24 lg:my-36 grid lg:grid-cols-3 lg:gap-20"
    v-editable="blok"
  >
    <img
      class="mb-6 lg:mb-0 col-span-1 lg:order-last"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />

    <div class="col-span-2 lg:text-right">
      <Typography variant="h3">{{ blok.name }}</Typography>
      <RichText :doc="blok.bio" />
    </div>
  </div>

  <div
    v-else
    class="container mx-auto my-24 lg:my-36 grid lg:grid-cols-3 lg:gap-20"
    v-editable="blok"
  >
    <img class="mb-6 lg:mb-0 col-span-1" :src="blok.image.filename" :alt="blok.image.alt" />

    <div class="col-span-2">
      <Typography variant="h3">{{ blok.name }}</Typography>
      <RichText :doc="blok.bio" />
    </div>
  </div>
</template>

<script setup>
  import Typography from '@/components/atoms/Typography.vue'
  import RichText from '@/components/atoms/Richtext.vue'

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>
