<template>
  <nuxt-link :class="`btn btn-${theme}`" class="block" v-if="href" :to="href">
    <slot />
  </nuxt-link>

  <button v-else :class="`btn btn-${theme}`" :type="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button',
      },
      theme: {
        type: String,
        default: 'gray-900',
      },
      href: {
        type: String,
        required: false,
      },
    },
  }
</script>

<style lang="postcss" scoped>
  .btn {
    @apply uppercase px-8 py-2 font-semibold text-center;

    &.btn-gray-900 {
      @apply bg-green-400 text-white;

      &:hover {
        @apply bg-green-400/75;
      }
    }

    &.btn-gray-400 {
      @apply bg-gray-900 text-white;

      &:hover {
        @apply bg-gray-900/75;
      }
    }

    &.btn-outline {
      @apply border-2 border-gray-900 text-gray-900;

      &:hover {
        @apply bg-gray-900/75 text-white;
      }
    }
  }
</style>
