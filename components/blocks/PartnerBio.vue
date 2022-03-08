<template>
  <div v-if="block.imageRight" class="base-wrapper my-24 lg:my-36 grid lg:grid-cols-3 lg:gap-20">
    <BaseImage
      class="mb-6 lg:mb-0 col-span-1 lg:order-last"
      :src="block.image.filename"
      :alt="block.image.alt"
    />

    <div class="col-span-2 lg:text-right">
      <BaseHeading class="text-primary-dark font-bold mb-6" size="h4" tag="h2">{{
        block.name
      }}</BaseHeading>
      <BaseRichText class="text-xs" :content="block.bio" />
    </div>
  </div>

  <div v-else class="base-wrapper my-24 lg:my-36 grid lg:grid-cols-3 lg:gap-20">
    <BaseImage class="mb-6 lg:mb-0 col-span-1" :src="block.image.filename" :alt="block.image.alt" />

    <div class="col-span-2">
      <BaseHeading class="text-primary-dark font-bold mb-6" size="h4" tag="h2">{{
        block.name
      }}</BaseHeading>
      <BaseRichText class="text-xs" :content="block.bio" />
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
  }
</script>

<style lang="scss" scoped></style>
