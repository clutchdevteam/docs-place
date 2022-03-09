export default {
  title: 'Blocks/Quote',
}

export const Default = (args) => ({
  props: Object.keys(args),
  template: `
  <div>
    <Quote v-bind="$props" />
  </div>
  `,
})

Default.argTypes = {
  block: {
    control: 'object',
  },
}

Default.args = {
  block: {
    quote:
      'They have a great reputation as far as clients maintaining long term recovery. The staff is very helpful and knowledgeable. They hold their clients accountable, and create an environment that made me feel hopeful... They showed me that life in recovery was full of possibilities!',
    author: "Steven K, Doc's Place Alumni",
  },
}
