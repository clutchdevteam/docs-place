<template>
  <section
    class="flex flex-col justify-center items-center relative py-20 bg-primary-dark overflow-hidden"
  >
    <BaseImage
      class="absolute opacity-10 object-cover h-full w-auto lg:h-auto lg:w-full z-0"
      :src="block.background_image.filename"
      :alt="block.background_image.alt"
    />

    <div
      class="base-wrapper flex flex-col justify-center lg:items-center opacity-100 z-10"
    >
      <p
        class="text-2xl leading-9 text-left font-bold w-3/4 text-white mb-16 lg:text-4xl lg:leading-normal lg:max-w-2xl lg:text-center"
      >
        {{ block.text }}
      </p>
      <div class="flex flex-col items-center">
        <BaseButton class="w-full">
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
