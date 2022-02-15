import Vue from 'vue';
import Page from '~/components/Page.vue';
import HomepageHero from '~/components/blocks/HomepageHero.vue';
import TwoColImageLeft from '~/components/blocks/TwoColImageLeft';
import TwoColImageRight from '~/components/blocks/TwoColImageRight';
import KeyFeatures from '~/components/blocks/KeyFeatures';
import Title from '~/components/blocks/Title';
import PageTitle from '~/components/blocks/PageTitle';

Vue.component('page', Page);
Vue.component('HomepageHero', HomepageHero);
Vue.component('TwoColImageLeft', TwoColImageLeft);
Vue.component('TwoColImageRight', TwoColImageRight);
Vue.component('KeyFeatures', KeyFeatures);
Vue.component('Title', Title);
Vue.component('PageTitle', PageTitle);
