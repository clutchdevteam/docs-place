<script setup>
  import Icon from '@/components/atoms/Icon.vue'

  defineProps({
    type: {
      type: String,
      default: 'button',
    },
    theme: {
      type: String,
      default: 'primary',
    },
    href: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: 'left',
    },
  })
</script>

<template>
  <nuxt-link
    :class="`btn btn-${theme} ${icon ? 'btn-with-icon' : 'btn-no-icon'} ${
      iconPosition === 'right' ? 'flex-row-reverse' : ''
    }`"
    v-if="href"
    :to="href"
  >
    <Icon v-if="icon" :name="icon" class="btn-icon" />
    <slot />
  </nuxt-link>

  <button
    v-else
    :class="`btn btn-${theme} ${icon ? 'btn-with-icon' : 'btn-no-icon'} ${
      iconPosition === 'right' ? 'flex-row-reverse' : ''
    }`"
    :type="type"
    @click="$emit('click')"
  >
    <Icon v-if="icon" :name="icon" class="btn-icon" />
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
  .btn {
    @apply inline-flex items-center justify-center uppercase text-sm text-center;

    /* Base padding - will be adjusted based on icon presence */
    @apply px-8 py-2;

    /* Icon styling */
    .btn-icon {
      @apply size-5 flex-shrink-0;
    }

    /* Icon colors based on theme */
    &.btn-primary .btn-icon,
    &.btn-primary-outline .btn-icon {
      @apply text-secondary;
    }

    &.btn-secondary .btn-icon {
      @apply text-black;
    }

    /* When there's an icon - add gap and adjust padding */
    &.btn-with-icon {
      @apply gap-2;
      /* Slightly reduce horizontal padding when icon is present */
      @apply px-6;
    }

    /* When there's no icon - no gap, standard padding */
    &.btn-no-icon {
      @apply gap-0;
      @apply px-8;
    }

    &.btn-primary {
      @apply bg-primary text-white;

      &:hover {
        @apply bg-primary/75;
      }
    }

    &.btn-secondary {
      @apply bg-secondary text-white;

      &:hover {
        @apply bg-secondary/75;
      }
    }

    &.btn-primary-outline {
      @apply border border-primary text-primary;

      &:hover {
        @apply bg-black/10;
      }
    }

    &.btn-secondary-outline {
      @apply border border-secondary text-black;

      &:hover {
        @apply bg-secondary/10;
      }
    }

    &.btn-secondary-outline-light {
      @apply border border-secondary text-white;

      &:hover {
        @apply bg-secondary;
      }
    }
  }
</style>
