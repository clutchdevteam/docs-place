<template>
  <div class="flex flex-col justify-center items-center mt-20 md:mt-28">
    <BaseHeading size="h1" class="text-primary-dark">{{
      block.title
    }}</BaseHeading>

    <BaseHeading size="h3" class="text-secondary-dark -mt-4">{{
      block.heading
    }}</BaseHeading>

    <BaseText class="mt-6 text-opacity-75 text-lg">{{ block.text }}</BaseText>
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

<style lang="postcss" scoped></style>
