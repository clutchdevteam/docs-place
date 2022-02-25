<template>
  <section
    class="flex flex-col justify-center items-center relative py-20 bg-primary-dark"
  >
    <BaseImage
      class="object-cover h-full w-auto absolute opacity-10 z-0 md:w-full md:h-max"
      :src="block.background_image.filename"
      :alt="block.background_image.alt"
    />

    <div
      class="base-wrapper flex flex-col justify-center md:items-center opacity-100 z-10"
    >
      <p
        class="text-2xl leading-9 text-left font-bold w-3/4 text-white mb-8 md:text-4xl md:leading-normal md:w-full md:my-4 md:text-center lg:text-5xl lg:leading-normal lg:w-11/12 lg:my-8"
      >
        {{ block.text }}
      </p>
      <div class="flex flex-col items-center">
        <BaseButton class="w-full my-8 md:my-4 lg:my-8">
          {{ block.button[0].btnText }}
        </BaseButton>
      </div>
    </div>
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
