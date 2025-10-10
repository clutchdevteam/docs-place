<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    as: {
      type: String,
      default: 'p',
      validator: (value) =>
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'label', 'div'].includes(value),
    },
    variant: {
      type: String,
      default: 'body',
      validator: (value) =>
        [
          'billboard',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'body-small',
          'body',
          'body-large',
          'label-small',
          'label',
          'label-large',
          'button',
        ].includes(value),
    },
    class: {
      type: String,
      default: '',
    },
  })

  const element = computed(() => {
    if (props.as !== 'p' && props.as !== 'span' && props.as !== 'div') {
      return props.as
    }

    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(props.variant)) {
      return props.variant
    }

    return props.as
  })

  const typographyClasses = computed(() => {
    const baseClasses = props.class ? [props.class] : []

    switch (props.variant) {
      case 'billboard':
        baseClasses.push('text-5xl lg:text-8xl ')
        break
      case 'h1':
        baseClasses.push('text-5xl  font-medium leading-snug')
        break
      case 'h2':
        baseClasses.push('text-4xl  font-medium')
        break
      case 'h3':
        baseClasses.push('text-2xl  font-medium')
        break
      case 'h4':
        baseClasses.push('text-xl font-medium')
        break
      case 'h5':
        baseClasses.push('text-lg font-medium')
        break
      case 'h6':
        baseClasses.push(' font-medium')
        break
      case 'body-small':
        baseClasses.push('text-sm')
        break
      case 'body':
        baseClasses.push('text-lg font-light')
        break
      case 'body-large':
        baseClasses.push('text-xl')
        break
      case 'label-small':
        baseClasses.push('text-sm')
        break
      case 'label':
        baseClasses.push('text-lg')
        break
      case 'label-large':
        baseClasses.push('text-xl')
        break
      case 'button':
        baseClasses.push('text-base')
        break
    }

    return baseClasses.join(' ')
  })
</script>

<template>
  <component :is="element" :class="[typographyClasses]" v-bind="$attrs">
    <slot />
  </component>
</template>

<style lang="postcss" scoped>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply tracking-tight;
  }
</style>
