<template>
  <div class="relative px-4 lg:px-0 max-w-2xl mx-auto my-24 lg:my-36">
    <BaseIcon file="quotes-icon" class="w-12 h-12" alt="" />
    <p class="text-lg opacity-75 pt-6 lg:ml-16">{{ block.quote }}</p>
    <p class="float-right mt-6 text-primary-dark font-bold">- {{ block.author }}</p>
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
  }
</script>
