import Vue from 'vue';
import { Block } from '@marvr/storyblok-rich-text-types';
import RichTextHeading from '~/components/Base/BaseRichText/RichTextHeading';
import RichTextParagraph from '~/components/Base/BaseRichText/RichTextParagraph';
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer';

Vue.use(VueRichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.PARAGRAPH]: RichTextParagraph,
      [Block.HEADING]: RichTextHeading,
    },
  },
});
