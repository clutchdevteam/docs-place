<script setup>
  import Icon from '@/components/atoms/Icon.vue'
  import Typography from '@/components/atoms/Typography.vue'
  import RichText from '@/components/atoms/Richtext.vue'
  import Stack from '@/components/atoms/Stack.vue'
  import Button from '@/components/atoms/Button.vue'
  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <section v-editable="blok" class="my-36 lg:my-48">
    <div class="relative container mx-auto">
      <Stack
        space="medium"
        class="w-full lg:w-7/12 border border-black/15 border-t-secondary border-t-2 py-6 px-6 lg:px-12 lg:pr-36"
      >
        <Icon :name="blok.icon" class="size-8 text-secondary" />
        <Typography variant="h2">{{ blok.title }}</Typography>
        <RichText :doc="blok.content" />
      </Stack>
      <Stack class="w-full mt-6 lg:mt-12 lg:absolute lg:top-0 lg:right-0 lg:w-1/2" space="large">
        <img class="w-full h-auto" :src="blok.image.filename" :alt="blok.image.alt" />
        <div class="lg:ml-auto">
          <Button
            v-if="blok.button"
            :href="blok.button[0].link.cached_url"
            :theme="blok.button[0].theme"
            icon="ArrowRight"
            iconPosition="right"
          >
            {{ blok.button[0].btnText }}
          </Button>
        </div>
      </Stack>
    </div>
  </section>
</template>
