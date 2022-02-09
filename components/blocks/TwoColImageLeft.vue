<template>
  <section class="base-wrapper my-24 md:my-36">
    <BaseTwoCol>
      <template v-slot:left>
        <div class="relative">
          <BaseImage :src="block.image.filename" :alt="block.image.alt" />
          <div
            :class="`decor-square absolute bottom-0 right-0 mb-[-10%] mr-[-5%] md:mb-[-20%] md:mr-[-10%] w-24 h-24 md:w-1/2 md:h-1/2 ${block.theme}`"
          />
        </div>
      </template>

      <template v-slot:right>
        <div :class="{ 'mt-8': block.heading }">
          <BaseHeading v-if="block.heading" class="text-primary-dark font-bold" size="h3">
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
};
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
