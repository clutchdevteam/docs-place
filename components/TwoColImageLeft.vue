<template>
  <section class="container mx-auto my-24 lg:my-36" v-editable="blok">
    <BaseTwoCol>
      <template v-slot:left>
        <div class="relative">
          <img :src="blok.image.filename" :alt="blok.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 right-0 mb-[-10%] mr-[-4%] lg:mb-[-20%] lg:mr-[-10%] w-24 h-24 lg:w-1/2 lg:h-1/2 ${blok.theme}`"
          />
        </div>
      </template>

      <template v-slot:right>
        <Stack space="small">
          <Typography v-if="blok.heading" variant="h2">
            {{ blok.heading }}
          </Typography>

          <div class="lg:w-3/4">
            <RichText :doc="blok.text" />
          </div>

          <div>
            <Button
              v-if="blok.button[0]"
              :href="blok.button[0].link.cached_url"
              :theme="blok.button[0].theme"
              icon="ArrowRight"
              iconPosition="right"
            >
              {{ blok.button[0].btnText }}
            </Button>
          </div>
        </Stack>
      </template>
    </BaseTwoCol>
  </section>
</template>

<script setup>
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

<style lang="postcss" scoped>
  .decor-square {
    mix-blend-mode: multiply;

    &.gray-900 {
      @apply bg-gray-900;
    }

    &.gray-400 {
      @apply bg-gray-400;
    }
  }
</style>
