<template>
  <img
    :src="src"
    :alt="alt"
    sizes="sm:200px md:400px lg:800px"
    loading="lazy"
  />
</template>

<script>
/**
 * A dumb base image component that will take up the full width of parent element it's placed in.
 */
export default {
  props: {
    /**
     * A string of the image source
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * Required alt text for the image
     */
    alt: {
      type: String,
      required: true,
    },
  },
};
</script>
