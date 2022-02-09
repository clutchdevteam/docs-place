import TwoColImageRight from '~/components/blocks/TwoColImageRight';
export default {
  title: 'Blocks/Two column image right',
  component: TwoColImageRight,
};

export const Default = (args) => ({
  props: Object.keys(args),
  components: {
    TwoColImageRight,
  },
  computed: {
    block() {
      return { ...args };
    },
  },
  template: '<TwoColImageRight :block="block" />',
});

Default.argTypes = {
  heading: {
    control: 'text',
  },
  text: {
    control: 'text',
  },
  image: {
    control: 'object',
  },
  theme: {
    control: {
      type: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

Default.args = {
  heading: 'Our Program',
  theme: 'primary',
  text:
    'The Doc’s Place Program provides a safe & structured living space for young men who are attempting to recover from drug and alcohol use. Residents of our program are provided with opportunities to address their psychological, spiritual, and physical health daily through structured programming proven to be successful for men in recovery. Doc’s Place Men’s Residential Recovery Program has been a successful name in the recovery community since 2007 and is known for being integrated in the local community of the Golden Isles. This is a design for living and for those of us lucky enough to surrender it is a way of life that brings us happiness, joy, and freedom. Members of the Doc’s Place Program are surrounded by well established alumni who have found new lives for themselves in recovery. Community is a major role in our program.',
  image: {
    id: 3817355,
    alt: 'A group of men posing for a picture on a stairset.',
    filename: 'https://a.storyblok.com/f/145554/2048x1536/fef3c72a29/img_3691.JPEG',
  },
  button: [],
};
