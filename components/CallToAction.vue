<template>
  <section
    class="flex flex-col justify-center items-center relative py-24 lg:py-36 overflow-hidden bg-black"
    v-editable="blok"
  >
    <img
      class="absolute opacity-15 object-cover h-full w-auto lg:h-auto lg:w-full z-0"
      :src="blok.background_image.filename"
      :alt="blok.background_image.alt"
    />

    <div
      class="relative container mx-auto flex flex-col justify-center lg:items-center opacity-100 z-10"
    >
      <Stack class="items-center" space="xlarge">
        <Typography variant="h1" class="lg:max-w-[75%] text-center text-white">{{
          blok.text
        }}</Typography>

        <Button
          :href="blok.button[0].link.cached_url"
          theme="secondary-outline-light"
          icon="ArrowRight"
          iconPosition="right"
        >
          {{ blok.button[0].btnText }}
        </Button>
      </Stack>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'
  import Typography from '@/components/atoms/Typography.vue'
  import Button from '@/components/atoms/Button.vue'
  import Stack from '@/components/atoms/Stack.vue'

  const props = defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })

  const headingSize = computed(() => {
    return props.blok.headingSize === 'large'
      ? 'text-2xl lg:text-4xl lg:max-w-2xl  mb-12'
      : 'text-lg mb-8'
  })
</script>
