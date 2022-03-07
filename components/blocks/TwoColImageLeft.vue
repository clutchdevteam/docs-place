<template>
  <section class="base-wrapper my-24 lg:my-36">
    <BaseTwoCol>
      <template v-slot:left>
        <div class="relative">
          <BaseImage :src="block.image.filename" :alt="block.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 right-0 mb-[-10%] mr-[-4%] lg:mb-[-20%] lg:mr-[-10%] w-24 h-24 lg:w-1/2 lg:h-1/2 ${block.theme}`"
          />
        </div>
      </template>

      <template v-slot:right>
        <div :class="{ 'mt-8': block.heading }">
          <BaseHeading v-if="block.heading" class="text-primary-dark font-bold mb-6" size="h3">
            {{ block.heading }}
          </BaseHeading>

          <div class="lg:w-3/4">
            <BaseRichText :content="block.text" />
          </div>
        </div>
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
