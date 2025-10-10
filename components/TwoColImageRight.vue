<template>
  <section class="relative mb-1" v-editable="blok">
    <div class="absolute inset-0">
      <img
        v-if="blok.backgroundImage"
        :src="blok.backgroundImage.filename"
        :alt="blok.backgroundImage.alt"
        class="object-contain object-bottom w-full h-full z-0"
      />
    </div>
    <div class="container mx-auto relative z-10 py-12">
      <BaseTwoCol>
        <template v-slot:left>
          <div class="relative blok lg:hidden">
            <img :src="blok.image.filename" :alt="blok.image.alt" />
            <div
              :class="`decor-square absolute bottom-0 left-0 mb-[-10%] ml-[-4%] w-24 h-24 ${blok.theme}`"
            />
          </div>

          <Stack space="small">
            <Typography v-if="blok.heading" variant="h2">
              {{ blok.heading }}
            </Typography>

            <div class="lg:w-3/4">
              <RichText :doc="blok.text" />
            </div>
          </Stack>
        </template>

        <template v-slot:right>
          <div class="relative hidden lg:block">
            <img :src="blok.image.filename" :alt="blok.image.alt" />
            <div
              :class="`decor-square absolute bottom-0 left-0 mb-[-15%] ml-[-10%]  w-1/2 h-1/2 ${blok.theme}`"
            />
          </div>

          <Button
            :href="blok.button[0].link.cached_url"
            class="blok lg:inline-blok lg:mt-32"
            v-if="blok.button.length"
            :theme="blok.button[0].theme"
            >{{ blok.button[0].btnText }}</Button
          >
        </template>
      </BaseTwoCol>
    </div>
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
      @apply bg-green-400;
    }
  }
</style>
