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

  const isDevelopment = process.env.ENV === 'develop'
  const version = isDevelopment ? 'draft' : 'published'

  // Use refreshCookie to ensure data is available on both server and client
  const { story: globalStory, refresh: refreshGlobalStory } = await useAsyncStoryblok('global', {
    api: {
      version,
    },
    key: 'global-story', // Add a key for caching
  })

  // Set the global data from Storyblok
  if (globalStory?.value?.content) {
    setGlobals(globalStory.value.content)
  }

  // Mark as loaded
  setLoaded(true)

  // Handle client-side hydration and Storyblok bridge
  onMounted(async () => {
    // If globalStory is undefined on client, refetch it
    if (!globalStory?.value?.content) {
      console.log('Refetching global story on client...')
      await refreshGlobalStory()
      if (globalStory?.value?.content) {
        setGlobals(globalStory.value.content)
      }
    }

    // Handle Storyblok bridge for live editing
    if (window.storyblok) {
      window.storyblok.init({
        accessToken: isDevelopment
          ? useRuntimeConfig().public.storyblokPreviewApiKey
          : useRuntimeConfig().public.storyblokApiKey,
      })

      window.storyblok.on(['input', 'published', 'change'], (event) => {
        if (event.action === 'input') {
          // Update the story data and refresh
          globalStory.value = event.story
          if (event.story?.content) {
            setGlobals(event.story.content)
          }
        } else {
          // Refresh the data for published changes
          refreshGlobalStory()
        }
      })
    }
  })

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
