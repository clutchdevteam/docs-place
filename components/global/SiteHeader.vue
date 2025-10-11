<template>
  <header class="z-[51] absolute w-full flex items-center justify-between border-b border-white/25">
    <div class="p-4 z-50 border-r border-white/25">
      <BaseLink href="/" :inert="isMobileMenuOpen" class="hover:bg-white/10">
        <img class="w-16 lg:w-20" v-if="logo" :src="logo.filename" :alt="logo.alt" />
      </BaseLink>
    </div>

    <nav class="hidden lg:flex justify-end w-full h-full font-normal text-sm text-white">
      <ul class="flex uppercase mr-6 xl:mr-0">
        <li v-for="(menu, index) in nav" :key="menu.id">
          <BaseMenu
            :id="`${menu.title.toLowerCase().replace(' ', '-')}-${index}`"
            classes="border-l border-white/25 text-center p-8  hover:bg-white/10"
            :menu="menu"
            :depth="0"
          />
        </li>
      </ul>
    </nav>

    <div class="mobile lg:hidden">
      <button
        class="p-4 text-white"
        ref="openButtonRef"
        @click="openMobileMenu"
        type="button"
        :inert="isMobileMenuOpen"
      >
        <span class="sr-only">Open main menu</span>
        <Menu class="w-8 h-8" file="menu-icon" alt="Open Menu" />

        <Teleport to="body">
          <div
            :class="`z-[52] fixed lg:hidden inset-0 bg-black transition duration-150 ${
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
              <div @click="closeMenu">
                <button
                  class="flex justify-center items-center bg-white rounded-full ml-4 mr-4 mt-4 h-12 w-12"
                  ref="closeButtonRef"
                  @click="closeMenu"
                  type="button"
                >
                  <span class="sr-only">Close menu</span>
                  <X class="w-6 h-6" file="close-icon" alt="Close menu" />
                </button>
              </div>

              <div class="flex flex-col justify-between h-screen w-full bg-white">
                <nav role="navigation">
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

                <footer class="px-3 py-6 bg-black">
                  <BaseLink href="/">
                    <img v-if="logo" :src="logo.filename" :alt="logo.alt" class="mx-auto size-48" />
                  </BaseLink>
                </footer>
              </div>
            </div>
          </div>
        </Teleport>
      </button>
    </div>
  </header>
</template>

<script setup>
  import { Menu, X } from 'lucide-vue-next'

  const route = useRoute()

  const props = defineProps({
    nav: {
      type: Array,
      required: true,
    },
    logo: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    contact: {
      type: Array,
      default: () => [],
    },
    inert: {
      type: Boolean,
      default: false,
    },
    isHomePage: {
      type: Boolean,
      default: false,
    },
  })

  // Use the global data composable
  const { isMobileMenuOpen, pageHasModalOpen, setMobileMenuOpen, setModalOpen } = useGlobalData()

  watch(
    () => route.fullPath,
    () => {
      closeMenu()
    }
  )

  const openMobileMenu = async () => {
    setMobileMenuOpen(true)
    await nextTick()
    await nextTick()
    // Focus close button if it exists
  }

  const closeMenu = async () => {
    setMobileMenuOpen(false)
    await nextTick()
    await nextTick()
  }
</script>

<style lang="postcss">
  nav ul li div a {
    @apply tracking-wider;
  }

  .nuxt-link-exact-active {
    @apply border-gray-900 opacity-100;
  }
</style>
