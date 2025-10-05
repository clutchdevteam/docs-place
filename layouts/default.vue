<template>
  <div class="site-wrapper">
    <SiteHeader :nav="mainNav" :logo="logo" :contact="contact" :inert="hasOpenMenu" />

    <main
      :class="`${!isHomePage ? 'mt-[66.36px] lg:mt-[74.94px]' : ''} ${
        lockScroll ? 'overflow-hidden' : ''
      }`"
      :inert="hasOpenMenu"
    >
      <Nuxt />
    </main>

    <SiteFooter :footer-content="footer" :contact="contact" :inert="hasOpenMenu" />

    <Teleport to="body">
      <div id="modal"></div>
    </Teleport>
    <Teleport to="body">
      <div id="mobile-menu"></div>
    </Teleport>
  </div>
</template>

<script setup>
  const route = useRoute()

  // Simple state management without Vuex
  const pageHasModalOpen = ref(false)
  const isMobileMenuOpen = ref(false)
  const mainNav = ref([])
  const logo = ref(null)
  const footer = ref({
    footerNav: [],
    logo: null,
    footerCTA: {},
  })
  const contact = ref([])

  const hasOpenMenu = computed(() => pageHasModalOpen.value || isMobileMenuOpen.value)
  const isHomePage = computed(() => route.fullPath === '/')
  const lockScroll = computed(() => pageHasModalOpen.value || isMobileMenuOpen.value)
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
