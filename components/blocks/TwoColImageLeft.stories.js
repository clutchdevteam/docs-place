import TwoColImageLeft from './TwoColImageLeft.vue';

export default {
  title: 'Blocks/Two column image left',
  component: TwoColImageLeft,
};

export const Default = (args) => ({
  props: Object.keys(args),
  components: {
    TwoColImageLeft,
  },
  computed: {
    block() {
      return { ...args };
    },
  },
  template: '<TwoColImageLeft :block="block" />',
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
  heading: 'Accommodations & Living',
  theme: 'primary',
  text:
    'Our houses are designed to make a resident feel comfortable and part of a community. Our main location is over 6,200 sq ft & features 5 full suites. Suites consist of a full kitchen, 2 to 3 bedrooms, and at least one full bath. Residents enjoy common areas such as game rooms, shady wrap around porch under live oak trees, fenced private yards, exercise spaces, and living rooms with comfortable home furnishings and TV. Other amenities on our properties include Wi-Fi, Ping-Pong & Pool, use of large outdoor parks across the street, and outdoor BBQ patio.  Doc’s Place is located close to the beach and within walking distance to several waterfronts and downtown areas. Residents have access to kayaks, fishing equipment, surf boards, pickle ball and tennis equipment, and other outdoor equipment to fill leisure time. Resident staff members reside in each facility to maintain compliance with the policy and procedures of the Doc’s Place Program. Chores and other requirements of each facility are general to group home living.  Residents make food choices in Doc’s Place on a weekly basis at each facility and make a shopping list specific to their needs and wants.',
  image: {
    id: 3817355,
    alt: 'A group of men posing for a picture on a stairset.',
    filename: 'https://a.storyblok.com/f/145554/2048x1536/fef3c72a29/img_3691.JPEG',
  },
  button: [],
};
