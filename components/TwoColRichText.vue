<template>
  <section class="base-wrapper my-24 lg:my-36" v-editable="blok">
    <BaseTwoCol>
      <template v-slot:left>
        <BaseRichText :content="blok.leftContent" />
      </template>
      <template v-slot:right>
        <BaseRichText :content="blok.rightContent" />
      </template>
    </BaseTwoCol>
  </section>
</template>

<script setup>
  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>
