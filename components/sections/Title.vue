<template>
  <section
    class="flex flex-col justify-center items-center base-wrapper mt-20 md:mt-28"
  >
    <BaseHeading size="h1" class="text-primary-dark">{{
      block.title
    }}</BaseHeading>

    <BaseHeading
      size="h3"
      class="text-secondary-dark text-center uppercase font-bold -mt-4"
      >{{ block.heading }}</BaseHeading
    >

    <BaseText class="mt-6 text-center max-w-screen-sm">{{
      block.text
    }}</BaseText>
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

<style lang="postcss" scoped></style>
