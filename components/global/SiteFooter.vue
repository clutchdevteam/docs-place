<template>
  <div>
    <ContactForm v-if="showContactForm" />
    <footer class="overflow-hidden relative py-12 lg:py-24 bg-black">
      <div class="relative z-10 container mx-auto flex flex-col space-y-10">
        <div v-if="footerContent.logo" class="w-72 mx-auto">
          <img :src="footerContent.logo.filename" :alt="footerContent.logo.alt" />
        </div>

        <nav
          v-if="footerContent.footerNav && footerContent.footerNav.length"
          class="uppercase lg:text-lg text-white"
        >
          <ul class="flex flex-row space-x-6 lg:space-x-12 lg:justify-center">
            <li v-for="menu in footerContent.footerNav" :key="menu.id">
              <NuxtLink :href="`/${menu.slug.cached_url}`">
                <Typography as="span">{{ menu.title }}</Typography>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="border-t border-white/25 flex justify-center w-full py-3 text-white/50">
          <Typography as="span" variant="body-small">
            &copy; {{ new Date().getFullYear() }} Place Recovery. All rights reserved.
          </Typography>
        </div>
      </div>
      <div class="absolute inset-0">
        <img
          src="/static/beach-footer.jpg"
          alt="Beach Footer"
          class="object-cover h-full min-w-fullobject-center opacity-10"
        />
      </div>
    </footer>
  </div>
</template>

<script setup>
  import ContactForm from '@/components/global/ContactForm.vue'
  import Typography from '@/components/atoms/Typography.vue'

  defineProps({
    footerContent: {
      type: Object,
      required: true,
    },
    contact: {
      type: Array,
      required: true,
    },
    showContactForm: {
      type: Boolean,
      required: true,
    },
  })
</script>

<style lang="postcss" scoped>
  .nuxt-link-exact-active {
    @apply border-gray-900;
  }
</style>
