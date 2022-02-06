<template>
  <div class="relative h-screen overflow-hidden flex justify-center items-center">
    <BaseImage
      class="absolute z-[-1]"
      :src="block.backgroundImage.filename"
      :alt="block.backgroundImage.alt"
    />

    <div class="flex flex-col items-center">
      <BaseHeading size="h1" class="text-white">{{ block.title }}</BaseHeading>
      <div>
        <BaseButton :href="block.btn[0].link.cached_url">{{ block.btn[0].btnText }}</BaseButton>
      </div>
    </div>
  </div>
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
