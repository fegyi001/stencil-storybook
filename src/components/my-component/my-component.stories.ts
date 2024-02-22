export default {
  title: 'Components/MyComponent',
  args: {
    first: 'John',
    middle: 'Doe',
    last: 'Smith',
  },
  argTypes: {
    first: {
      description: 'The first name',
      control: 'text',
    },
    middle: {
      description: 'The middle name',
      control: 'text',
    },
    last: {
      description: 'The last name',
      control: 'text',
    },
  },
}

const Template = args => `
  <my-component
    first="${args.first}"
    middle="${args.middle}"
    last="${args.last}" />`

export const Default = Template.bind({})
Default.args = {
  first: 'John',
  middle: 'Doe',
  last: 'Smith',
}
