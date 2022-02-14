import Vue from "vue";
import Page from "~/components/Page.vue";
import HomepageHero from "~/components/blocks/HomepageHero.vue";
import TwoColImageLeft from "~/components/blocks/TwoColImageLeft";
import TwoColImageRight from "~/components/blocks/TwoColImageRight";
import Title from "~/components/sections/Title";

Vue.component("page", Page);
Vue.component("HomepageHero", HomepageHero);
Vue.component("TwoColImageLeft", TwoColImageLeft);
Vue.component("TwoColImageRight", TwoColImageRight);
Vue.component("Title", Title);
