<template>
  <section class="base-wrapper lg:grid grid-cols-3 gap-12 my-24 lg:my-36">
    <Feature
      v-for="feature in block.features"
      :key="feature._uid"
      :feature="feature"
      class="mb-24 lg:mb-0"
    />
  </section>
</template>

<script>
  import Feature from '~/components/atoms/Feature'

  export default {
    name: 'KeyFeatures',
    components: {
      Feature,
    },
    props: {
      block: {
        type: Object,
        required: true,
      },
    },
  }
</script>
