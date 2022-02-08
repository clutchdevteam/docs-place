<template>
  <section class="relative h-screen flex justify-center items-center">
    <BaseImage
      class="absolute z-[-1] object-none object-center md:object-cover h-full"
      :src="block.backgroundImage.filename"
      :alt="block.backgroundImage.alt"
    />

    <div class="flex flex-col items-center -mt-64 md:-mt-24">
      <BaseHeading size="h1" class="text-white">{{ block.title }}</BaseHeading>
      <div>
        <BaseButton :href="block.btn[0].link.cached_url">{{ block.btn[0].btnText }}</BaseButton>
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
