export default {
  title: 'Blocks/Partner bio',
}

export const ImageRight = (args) => ({
  props: Object.keys(args),
  template: `
    <partner-bio v-bind="$props" />
  `,
})

ImageRight.argTypes = {
  block: {
    control: 'object',
  },
}

ImageRight.args = {
  block: {
    imageRight: true,
    bio: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              text:
                'Nate was born in Kennesaw, Ga to a loving and supportive family. Early in his life, despite being provided every opportunity he could have possibly wanted, Nate’s alcoholism and drug addiction took hold. He quickly gave nearly everything he had in his life away to his alcoholism and there did not seem to be an end to his nightmare. Having enrolled in countless treatment centers with nothing to show for it, him and his family lost all hope. Truly out of options and on the verge of death, a moment of clarity hit. Nate knew he did not stand a chance at sobriety or any resemblance of a meaningful life without long term treatment.',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text:
                'He needed structure and accountability. Nate Faulkenberry enrolled in Doc’s Place in 2015 and his life started to change. From a hopeless alcoholic drug addict to a life with meaning and fulfillment. He stayed active in the program through sponsorship, mentorship, and community involvement. When the opportunity to become the Owner & Operator of Doc’s Place presented itself, he knew he had to accept.',
              type: 'text',
            },
          ],
        },
      ],
    },
    name: 'Nate Faulkenberry - Owner & Operator',
    image: {
      id: 3996868,
      alt: 'Nate and his wife standing on a mountain top after a hike.',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/145554/308x353/63745431db/image-3.png',
      copyright: '',
      fieldtype: 'asset',
    },
  },
}

export const ImageLeft = (args) => ({
  props: Object.keys(args),
  template: `
    <partner-bio v-bind="$props" />
  `,
})

ImageLeft.argTypes = {
  block: {
    control: 'object',
  },
}

ImageLeft.args = {
  block: {
    bio: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              text:
                'Nate was born in Kennesaw, Ga to a loving and supportive family. Early in his life, despite being provided every opportunity he could have possibly wanted, Nate’s alcoholism and drug addiction took hold. He quickly gave nearly everything he had in his life away to his alcoholism and there did not seem to be an end to his nightmare. Having enrolled in countless treatment centers with nothing to show for it, him and his family lost all hope. Truly out of options and on the verge of death, a moment of clarity hit. Nate knew he did not stand a chance at sobriety or any resemblance of a meaningful life without long term treatment.',
              type: 'text',
            },
          ],
        },
        {
          type: 'paragraph',
          content: [
            {
              text:
                'He needed structure and accountability. Nate Faulkenberry enrolled in Doc’s Place in 2015 and his life started to change. From a hopeless alcoholic drug addict to a life with meaning and fulfillment. He stayed active in the program through sponsorship, mentorship, and community involvement. When the opportunity to become the Owner & Operator of Doc’s Place presented itself, he knew he had to accept.',
              type: 'text',
            },
          ],
        },
      ],
    },
    name: 'Nate Faulkenberry - Owner & Operator',
    image: {
      id: 3996868,
      alt: 'Nate and his wife standing on a mountain top after a hike.',
      name: '',
      focus: null,
      title: '',
      filename: 'https://a.storyblok.com/f/145554/308x353/63745431db/image-3.png',
      copyright: '',
      fieldtype: 'asset',
    },
  },
}
