<template>
  <rich-text-renderer :document="content" />
</template>

<script>
  export default {
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="postcss" scoped>
  p,
  li,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  code,
  hr {
    @apply mb-5 leading-relaxed;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-bold text-primary-dark;
  }

  p,
  li,
  ol {
    @apply opacity-75;
  }

  ul,
  ol {
    @apply ml-5 opacity-100;
  }

  ul {
    @apply list-disc;
  }

  ol {
    @apply list-decimal;
  }

  blockquote {
    @apply border-l-2 border-secondary-light pl-4 py-2 ml-2;
  }

  blockquote p {
    @apply mb-0;
  }

  a {
    @apply underline text-primary-darker font-bold;
  }

  @screen md {
    p {
      @apply text-base;
    }
  }
</style>
