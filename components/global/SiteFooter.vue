<template>
  <footer class="py-12 bg-gray-light border-t-4 border-primary-light">
    <div class="flex flex-col items-center space-y-10">
      <div class="w-44">
        <BaseImage :src="footerContent.logo.filename" :alt="footerContent.logo.alt" />
      </div>

      <nav class="uppercase text-primary-dark font-bold md:text-lg">
        <ul
          class="flex flex-col md:flex-row text-center md:text-left space-y-8 md:space-x-12 md:space-y-0"
        >
          <li v-for="menu in footerContent.footerNav" :key="menu.id">
            <BaseLink classes="border-b-2 border-transparent" :href="menu.slug.cached_url">{{
              menu.title
            }}</BaseLink>
          </li>
        </ul>
      </nav>

      <div class="flex space-x-6 text-primary-dark">
        <a
          v-for="item in contact"
          :key="item.id"
          class="flex items-center opacity-75 hover:opacity-100"
          href="#"
        >
          <span class="mr-3 text-primary-light">
            <svg
              v-if="item.icon === 'address'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>

            <svg
              v-else
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
            <p class="text-sm font-semibold">{{ item.Heading }}</p>
            <p class="text-xs">{{ item.Subheading }}</p>
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    footerContent: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('global', ['contact']),
  },
};
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply border-primary-light;
}
</style>
