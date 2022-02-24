<template>
  <section class="flex flex-col justify-center items-center">
    <div class="bg-primary-dark">
      <BaseImage
        class="w-screen h-auto opacity-10"
        :src="block.background_image.filename"
        :alt="block.background_image.alt"
      />
    </div>

    <div
      class="base-wrapper flex flex-col justify-center items-center opacity-100 absolute"
    >
      <div
        class="text-base text-center font-bold text-white my-2 md:text-3xl md:my-4 lg:text-5xl lg:my-8"
      >
        {{ block.text }}
      </div>
      <div>
        <BaseButton class="my-2 md:my-4 lg:my-8">
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
