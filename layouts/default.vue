<template>
  <div class="site-wrapper" :class="{ 'overflow-x-hidden': lockScroll }">
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

  const { story: globalStory } = await useAsyncStoryblok('global', {
    api: {
      version: 'draft',
    },
  })

  // Set the global data from Storyblok
  if (globalStory?.value.content) {
    setGlobals(globalStory.value.content)
    setLoaded(true)
  }

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
