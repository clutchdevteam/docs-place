<template>
  <div class="relative">
    <img
      v-if="feature.backgroundImage"
      :src="feature.backgroundImage.filename"
      :alt="feature.backgroundImage.alt"
      class="absolute inset-0 object-cover w-full h-full opacity-50"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b opacity-85 h-full w-full"
      :style="gradientStyle"
    />

    <div class="relative z-10 flex flex-col items-start space-y-12 px-6 p-12 lg:px-12">
      <div class="flex flex-col space-y-4">
        <Icon :name="feature.icon" class="size-10 text-white" />

        <Typography variant="h4" as="h2">
          {{ feature.heading }}
        </Typography>
      </div>

      <Typography class="font-light lg:w-3/4">
        {{ feature.text }}
      </Typography>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import Typography from '@/components/atoms/Typography.vue'
  import Icon from '@/components/atoms/Icon.vue'

  const props = defineProps({
    feature: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: 'accent-blue',
    },
  })

  const gradientStyle = computed(() => {
    const colorMap = {
      'accent-blue': {
        from: 'rgba(163, 210, 214)',
        to: '#6fadaa',
      },
      'accent-olive': {
        from: 'rgba(156, 173, 114)',
        to: 'rgba(112, 156, 79)',
      },
      'accent-forest': {
        from: 'rgba(114, 173, 132)',
        to: '#508c62',
      },
    }

    const colors = colorMap[props.color] || colorMap['accent-blue']
    return {
      background: `linear-gradient(to bottom, ${colors.from}, ${colors.to})`,
    }
  })
</script>
