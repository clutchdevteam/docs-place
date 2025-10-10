<template>
  <section class="grid lg:grid-cols-3 my-1 gap-1" v-editable="blok">
    <Feature
      v-for="(feature, index) in blok.features"
      :key="feature._uid"
      :feature="feature"
      :color="getColor(index)"
    />
  </section>
</template>

<script setup>
  import Feature from '@/components/atoms/Feature.vue'
  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })

  function getColor(index) {
    switch (index) {
      case 0:
        return 'accent-blue'
      case 1:
        return 'accent-olive'
      case 2:
        return 'accent-forest'
    }
  }
</script>
