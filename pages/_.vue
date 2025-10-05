<template>
  <div v-if="story?.content?.component">
    <Page :key="story.content._uid" :block="story.content" />
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Doc's Place Recovery</h1>
      <p class="text-xl text-gray-600 mb-8">A Residential Recovery for Men</p>
      <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <p class="font-semibold">Storyblok Integration Ready!</p>
        <p class="text-sm mt-1">Add your Storyblok API keys to see your content.</p>
        <p class="text-sm">Check the ENVIRONMENT_SETUP.md file for instructions.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  const router = useRouter()

  // Get the full slug for the current route
  const fullSlug = route.path === '/' ? 'home' : route.path.replace(/^\//, '')

  // Set version based on environment and query params
  const version = route.query._storyblok || process.dev ? 'draft' : 'published'

  // Fetch the story using the new Storyblok composable
  const { story } = await useAsyncStoryblok(fullSlug, {
    version: version,
    resolveRelations: ['featured-articles.articles'],
  }).catch(() => {
    // Fallback if Storyblok is not configured
    return { story: { content: { component: 'page' } } }
  })

  // Handle Storyblok bridge for live editing
  onMounted(() => {
    if (window.storyblok) {
      window.storyblok.init({
        accessToken: useRuntimeConfig().public.storyblokPreviewApiKey,
      })

      window.storyblok.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          if (event.story.id === story.value.id) {
            story.value.content = event.story.content
          }
        } else {
          router.go(0) // Reload the page
        }
      })
    }
  })
</script>
