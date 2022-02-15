<template>
  <div class="base-wrapper text-center my-12 md:mt-24 md:mb-16">
    <BaseHeading class="text-primary-dark mb-8" size="h2" tag="h1">{{ block.heading }}</BaseHeading>

    <BaseText v-if="block.text" class="lg:max-w-2xl mx-auto">{{ block.text }}</BaseText>
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
