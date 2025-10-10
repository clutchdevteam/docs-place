<template>
  <div class="site-wrapper">
    <SiteHeader
      :nav="mainNav || []"
      :logo="logo || {}"
      :contact="contact || []"
      :inert="hasOpenMenu"
      :isHomePage="isHomePage"
    />

    <main :inert="hasOpenMenu">
      <NuxtPage />
    </main>

    <SiteFooter
      :footer-content="footer || {}"
      :contact="contact || []"
      :inert="hasOpenMenu"
      :showContactForm="route.name !== 'contact-us'"
    />
  </div>
</template>

<script setup>
  const route = useRoute()

  // Use the global data composable
  const { setGlobals, setLoaded, mainNav, logo, footer, contact, hasOpenMenu, isHomepage } =
    useGlobalData()

  // Create a reactive ref for global story data
  const globalStory = ref(null)

  // Fetch initial global data
  const { story: initialGlobalStory } = await useAsyncStoryblok('global', {
    api: {
      version: 'draft',
    },
  })

  // Set initial data
  globalStory.value = initialGlobalStory.value

  // Watch for changes to global story and update globals
  watch(
    globalStory,
    (newStory) => {
      if (newStory?.content) {
        setGlobals(newStory.content)
      }
    },
    { immediate: true }
  )

  // Handle Storyblok bridge for live editing
  onMounted(() => {
    if (window.storyblok) {
      window.storyblok.init({
        accessToken:
          process.env.NODE_ENV === 'development'
            ? useRuntimeConfig().public.storyblokPreviewApiKey
            : useRuntimeConfig().public.storyblokApiKey,
      })

      window.storyblok.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          // Update the reactive ref, which will trigger the watcher
          globalStory.value = event.story
        } else {
          window.location.reload()
        }
      })
    }
  })

  // Mark as loaded
  setLoaded(true)

  // Create a computed property that reacts to both the route and the global state
  const isHomePage = computed(() => {
    return route.fullPath === '/' || isHomepage.value
  })

  const lockScroll = computed(() => hasOpenMenu.value)
</script>

<style lang="postcss" scoped>
  body {
    overflow-x: hidden;
    margin: 0;
  }

  .site-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header,
  footer {
    flex-grow: 0;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
</style>
