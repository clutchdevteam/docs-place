<script setup>
  defineProps({
    doc: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div id="richtext">
    <StoryblokRichText :doc="doc" />
  </div>
</template>

<style lang="postcss">
  /* Specific element styles */
  #richtext h1 {
    @apply text-5xl leading-none font-medium my-10;
  }

  #richtext h2 {
    @apply text-4xl leading-6 font-medium my-10;
  }

  #richtext h3 {
    @apply text-2xl leading-6 font-medium my-10;
  }

  #richtext h4 {
    @apply text-xl font-medium my-5;
  }

  #richtext h5 {
    @apply text-lg font-medium my-5;
  }

  #richtext h6 {
    @apply font-medium my-5;
  }

  #richtext p {
    @apply text-lg font-light my-10;
  }

  #richtext p:not(:has(strong, b, a, img)) {
    @apply opacity-75;
  }

  #richtext ul {
    @apply list-disc ml-5;
  }

  #richtext ul li p {
    @apply text-lg list-inside ml-2.5;
  }

  #richtext ol {
    @apply list-decimal;
  }

  #richtext blockquote {
    @apply border-l-2 border-secondary bg-gray-100 p-4 pl-6;
  }

  #richtext blockquote p {
    @apply my-0;
  }

  #richtext a {
    @apply underline text-secondary font-bold;
  }

  #richtext code {
    @apply text-primary font-bold;
  }
</style>
