<template>
  <section class="relative h-screen flex justify-center items-center" v-editable="blok">
    <div class="absolute inset-0 bg-black/50 z-10" />
    <img
      class="absolute z-[-1] object-none object-center lg:object-cover h-full w-full"
      :src="blok.backgroundImage.filename"
      :alt="blok.backgroundImage.alt"
    />

    <div class="container mx-auto z-40">
      <div class="flex flex-col space-y-12">
        <div class="flex flex-col space-y-6">
          <Typography variant="billboard" as="h1" class="text-white lg:w-2/3 uppercase">
            {{ blok.title }}
          </Typography>
          <Typography
            v-if="blok.subtitle"
            variant="body-large"
            class="text-white/85 font-light lg:w-2/3"
          >
            {{ blok.subtitle }}
          </Typography>
        </div>
        <div>
          <Button
            class="inline"
            :href="blok.btn[0].link.cached_url"
            icon="ArrowRight"
            iconPosition="right"
          >
            {{ blok.btn[0].btnText }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Typography from '@/components/atoms/Typography.vue'
  import Button from '@/components/atoms/Button.vue'

  defineProps({
    blok: {
      type: Object,
      required: true,
    },
  })
</script>
