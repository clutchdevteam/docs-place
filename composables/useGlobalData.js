import { ref, computed } from 'vue'

// Global data composable for header and footer content
export const useGlobalData = () => {
  // Global state
  const isLoaded = ref(false)
  const isMobileMenuOpen = ref(false)
  const pageHasModalOpen = ref(false)

  // Content data
  const mainNav = ref([])
  const contact = ref([])
  const logo = ref(null)
  const footer = ref({
    footerNav: [],
    logo: null,
    footerCTA: {},
  })
  const isHomepage = ref(false)

  // Actions
  const setMobileMenuOpen = (isOpen) => {
    isMobileMenuOpen.value = isOpen
  }

  const setModalOpen = (isOpen) => {
    pageHasModalOpen.value = isOpen
  }

  const setLoaded = (loaded) => {
    isLoaded.value = loaded
  }

  const setGlobals = (globals) => {
    mainNav.value = globals.mainNav || []
    logo.value = globals.Logo || null
    contact.value = globals.contact || []

    footer.value.footerNav = globals?.footer?.[0]?.footerNav || []
    footer.value.logo = globals?.footer?.[0]?.logo || null
    footer.value.footerCTA = globals?.footer?.[0]?.footerCTA?.[0] || {}

    setLoaded(true)
  }

  const setIsHomepage = (value) => {
    isHomepage.value = value
  }

  // Computed
  const hasOpenMenu = computed(() => pageHasModalOpen.value || isMobileMenuOpen.value)

  return {
    // State
    isLoaded: isLoaded,
    isMobileMenuOpen: isMobileMenuOpen,
    pageHasModalOpen: pageHasModalOpen,
    mainNav: mainNav,
    contact: contact,
    logo: logo,
    footer: footer,
    isHomepage: isHomepage,
    // Computed
    hasOpenMenu,

    // Actions
    setMobileMenuOpen,
    setModalOpen,
    setLoaded,
    setGlobals,
    setIsHomepage,
  }
}
