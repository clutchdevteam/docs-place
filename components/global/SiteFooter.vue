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
            <BaseLink classes="border-b-2 border-transparent p-1" :href="menu.slug.cached_url">{{
              menu.title
            }}</BaseLink>
          </li>
        </ul>
      </nav>

      <div class="flex space-x-6 text-primary-dark">
        <a
          v-for="item in contact"
          :key="item.id"
          class="flex items-center opacity-75 hover:opacity-100 p-2"
          href="#"
        >
          <span class="mr-3 text-primary-light">
            <BaseIcon class="h-5 w-5" :file="item.icon" :alt="item.icon" />
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
