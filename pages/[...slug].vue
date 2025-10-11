<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
  const slug = useRoute().params.slug

  const path = slug && slug.length > 0 ? slug.join('/') : 'home'
  const isHomepage = path === 'home'

  // Use the global data composable
  const { setIsHomepage } = useGlobalData()

  setIsHomepage(isHomepage)

  // Determine version and API key based on environment
  const isDevelopment = process.env.ENV === 'develop'
  const version = isDevelopment ? 'draft' : 'published'
  const apiKey = isDevelopment
    ? useRuntimeConfig().public.storyblokPreviewApiKey
    : useRuntimeConfig().public.storyblokApiKey

  const { story } = await useAsyncStoryblok(path, {
    api: {
      version: version,
    },
  })
</script>
