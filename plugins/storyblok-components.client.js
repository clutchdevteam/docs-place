import Page from '~/components/Page.vue'
import HomepageHero from '~/components/HomepageHero.vue'
import KeyFeatures from '~/components/KeyFeatures.vue'
import CallToAction from '~/components/CallToAction.vue'
import Quote from '~/components/Quote.vue'
import Title from '~/components/Title.vue'
import Carousel from '~/components/Carousel.vue'
import TwoColImageLeft from '~/components/TwoColImageLeft.vue'
import TwoColImageRight from '~/components/TwoColImageRight.vue'
import TwoColRichText from '~/components/TwoColRichText.vue'
import FooterCallToAction from '~/components/FooterCallToAction.vue'
import HighlightText from '~/components/HighlightText.vue'
import PageTitle from '~/components/PageTitle.vue'
import PartnerBio from '~/components/PartnerBio.vue'
import TextImageSplit from '~/components/TextImageSplit.vue'
import FeaturedContent from '~/components/FeaturedContent.vue'
import FrequentlyAskedQuestions from '~/components/FrequentlyAskedQuestions.vue'
import Article from '~/components/Article.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Page', Page)
  nuxtApp.vueApp.component('HomepageHero', HomepageHero)
  nuxtApp.vueApp.component('KeyFeatures', KeyFeatures)
  nuxtApp.vueApp.component('CallToAction', CallToAction)
  nuxtApp.vueApp.component('Quote', Quote)
  nuxtApp.vueApp.component('Title', Title)
  nuxtApp.vueApp.component('Carousel', Carousel)
  nuxtApp.vueApp.component('TwoColImageLeft', TwoColImageLeft)
  nuxtApp.vueApp.component('TwoColImageRight', TwoColImageRight)
  nuxtApp.vueApp.component('TwoColRichText', TwoColRichText)
  nuxtApp.vueApp.component('FooterCallToAction', FooterCallToAction)
  nuxtApp.vueApp.component('HighlightText', HighlightText)
  nuxtApp.vueApp.component('PageTitle', PageTitle)
  nuxtApp.vueApp.component('PartnerBio', PartnerBio)
  nuxtApp.vueApp.component('TextImageSplit', TextImageSplit)
  nuxtApp.vueApp.component('FeaturedContent', FeaturedContent)
  nuxtApp.vueApp.component('FrequentlyAskedQuestions', FrequentlyAskedQuestions)
  nuxtApp.vueApp.component('Article', Article)
})
