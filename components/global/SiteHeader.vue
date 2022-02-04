<template>
  <header
    :class="`relative flex items-center justify-between ${!isHomePage ? 'bg-secondary-dark' : ''}`"
  >
    <div class="bg-primary-light p-4 z-50">
      <BaseLink href="/" :inert="isMobileMenuOpen">
        <BaseImage class="w-16 lg:w-20" v-if="logo" :src="logo.filename" :alt="logo.alt" />
      </BaseLink>
    </div>

    <nav
      class="absolute z-40 hidden lg:flex items-center justify-center w-full h-full font-semibold text-white"
    >
      <ul class="flex uppercase mr-6 xl:mr-0">
        <li v-for="menu in nav" :key="menu.id">
          <BaseMenu
            classes="w-32 xl:w-40 text-center py-2 border-t-2 border-transparent opacity-75 hover:opacity-100"
            :menu="menu"
            :depth="0"
          />
        </li>
      </ul>
    </nav>

    <div
      class="hidden lg:flex space-x-6 mr-6 z-50 text-white origin-right scale-90 xl:transform-none"
    >
      <a class="flex items-center opacity-75 hover:opacity-100" href="#">
        <span class="mr-3 text-primary-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            />
          </svg>
        </span>
        <div class="">
          <p class="text-sm">902 Halifax Sq</p>
          <p class="text-xs">Brunswick, GA 31520</p>
        </div>
      </a>

      <a class="flex items-center opacity-75 hover:opacity-100" href="#">
        <span class="mr-3 text-primary-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
        </span>
        <div class="">
          <p class="text-sm">(912) 223-4110</p>
          <p class="text-xs">Support Available 24/7</p>
        </div>
      </a>
    </div>

    <div class="mobile lg:hidden">
      <button
        class="text-white p-4"
        ref="openButtonRef"
        @click="toggleMobileMenu"
        type="button"
        :inert="isMobileMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <Portal to="mobile-menu">
          <div
            :class="`z-[999] fixed lg:hidden inset-0 bg-black transition duration-150 ${
              isMobileMenuOpen ? 'bg-opacity-75' : 'bg-opacity-0 pointer-events-none'
            }`"
            :inert="!isMobileMenuOpen"
            @keydown.esc="closeMenu"
          >
            <div
              :class="`flex transform transition-transform duration-150 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`"
            >
              <div>
                <button
                  class="flex justify-center items-center bg-white rounded-full ml-4 mr-4 mt-4 h-12 w-12"
                  ref="closeButtonRef"
                  @click="closeMenu"
                  type="button"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div class="flex flex-col justify-between h-screen w-full bg-white">
                <nav class="text-secondary-dark" role="navigation">
                  <ul>
                    <li v-for="menu in nav" :key="menu.id">
                      <BaseMenu
                        classes="py-6 px-4 border-b border-gray-300"
                        :menu="menu"
                        :depth="0"
                      />
                    </li>
                  </ul>
                </nav>

                <div class="px-3 py-6">
                  <BaseLink href="/">
                    <BaseImage v-if="logo" :src="logo.filename" :alt="logo.alt" />
                  </BaseLink>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { Portal } from 'portal-vue';

export default {
  components: {
    Portal,
  },
  props: {
    nav: {
      type: Array,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('global', ['isMobileMenuOpen', 'pageHasModalOpen']),
    isHomePage() {
      return this.$route.fullPath === '/';
    },
  },
  watch: {
    $route(to, from) {
      this.closeMenu();
    },
  },
  methods: {
    async toggleMobileMenu() {
      await this.$store.commit('global/isMobileMenuOpen', !this.isMobileMenuOpen);
      await this.$nextTick();
      await this.$nextTick();

      this.$refs.closeButtonRef?.focus();
    },
    async closeMenu() {
      await this.$store.commit('global/isMobileMenuOpen', false);
      await this.$nextTick();
      await this.$nextTick();

      this.$refs.openButtonRef?.focus();
    },
  },
};
</script>

<style lang="postcss">
nav ul li div a {
  @apply uppercase font-semibold tracking-wider;
}

.nuxt-link-exact-active {
  @apply border-primary-light opacity-100;
}
</style>
