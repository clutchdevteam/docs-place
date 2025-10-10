<template>
  <Stack space="large">
    <PageTitle
      :blok="{
        heading: blok.title,
        text: formattedDate,
      }"
    />

    <Stack class="max-w-3xl mx-auto">
      <img :src="blok.image.filename" :alt="blok.image.alt" />

      <div class="px-6 lg:px-12">
        <RichText :doc="blok.content" />
      </div>
    </Stack>
  </Stack>
</template>

<script setup>
  import { computed } from 'vue'
  import Stack from '@/components/atoms/Stack.vue'
  import RichText from '@/components/atoms/Richtext.vue'

  const props = defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })

  const formattedDate = computed(() => {
    if (!props.blok.publishDate) return ''

    const date = new Date(props.blok.publishDate)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  })
</script>
