<template>
  <section class="base-wrapper my-24 lg:my-36">
    <BaseTwoCol>
      <template v-slot:left>
        <BaseRichText :content="block.leftContent" />
      </template>
      <template v-slot:right>
        <BaseRichText :content="block.rightContent" />
      </template>
    </BaseTwoCol>
  </section>
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
