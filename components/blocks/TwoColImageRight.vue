<template>
  <section class="base-wrapper">
    <BaseTwoCol class="my-24 lg:my-36">
      <template v-slot:left>
        <div class="relative block lg:hidden">
          <BaseImage :src="block.image.filename" :alt="block.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 left-0 mb-[-10%] ml-[-4%] w-24 h-24 ${block.theme}`"
          />
        </div>

        <div class="mt-24 lg:mt-0">
          <BaseHeading v-if="block.heading" class="text-primary-dark font-bold mb-6" size="h3">
            {{ block.heading }}
          </BaseHeading>

          <div class="lg:w-3/4">
            <BaseRichText :content="block.text" />
          </div>
        </div>
      </template>

      <template v-slot:right>
        <div class="relative hidden lg:block">
          <BaseImage :src="block.image.filename" :alt="block.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 left-0 mb-[-15%] ml-[-10%]  w-1/2 h-1/2 ${block.theme}`"
          />
        </div>

        <BaseButton
          :href="block.button[0].link.cached_url"
          class="block lg:inline-block lg:mt-32"
          v-if="block.button.length"
          :theme="block.button[0].theme"
          >{{ block.button[0].btnText }}</BaseButton
        >
      </template>
    </BaseTwoCol>
  </section>
</template>

<script>
  export default {
    props: {
      block: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="postcss" scoped>
  .decor-square {
    mix-blend-mode: multiply;

    &.primary {
      @apply bg-primary-light;
    }

    &.secondary {
      @apply bg-secondary-light;
    }
  }
</style>
