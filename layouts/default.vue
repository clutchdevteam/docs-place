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

    <PortalTarget name="modal"></PortalTarget>
    <PortalTarget name="mobile-menu"></PortalTarget>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('global', [
        'pageHasModalOpen',
        'isMobileMenuOpen',
        'mainNav',
        'logo',
        'footer',
        'contact',
      ]),
      hasOpenMenu() {
        return this.pageHasModalOpen || this.isMobileMenuOpen
      },
      isHomePage() {
        return this.$route.fullPath === '/'
      },
      lockScroll() {
        return this.pageHasModalOpen || this.isMobileMenuOpen
      },
    },
  }
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
