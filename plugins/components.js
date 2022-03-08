import Vue from "vue";
import Page from "~/components/Page.vue";
import HomepageHero from "~/components/blocks/HomepageHero.vue";
import TwoColImageLeft from "~/components/blocks/TwoColImageLeft";
import TwoColImageRight from "~/components/blocks/TwoColImageRight";
import KeyFeatures from "~/components/blocks/KeyFeatures";
import Title from "~/components/blocks/Title";
import PageTitle from "~/components/blocks/PageTitle";
import CallToAction from "~/components/blocks/CallToAction";
import FooterCallToAction from "~/components/blocks/FooterCallToAction";
import HighlightText from "~/components/blocks/HighlightText";
import Carousel from '~/components/blocks/Carousel'

Vue.component("page", Page);
Vue.component("HomepageHero", HomepageHero);
Vue.component("TwoColImageLeft", TwoColImageLeft);
Vue.component("TwoColImageRight", TwoColImageRight);
Vue.component("KeyFeatures", KeyFeatures);
Vue.component("Title", Title);
Vue.component("PageTitle", PageTitle);
Vue.component("CallToAction", CallToAction);
Vue.component("FooterCallToAction", FooterCallToAction);
Vue.component("HighlightText", HighlightText);
Vue.component('Carousel', Carousel)