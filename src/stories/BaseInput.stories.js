import BaseInput from '../components/BaseInput.vue'
export default {
    title: 'Components/BaseInput',
    component: BaseInput,
    argTypes: {
        placeholder: { control: 'text' }
    }
}
const Template = (args) => ({
    components: { BaseInput },
    setup() { return { args, text: '' } },
    template: `
    <div>
      <BaseInput v-bind="args" v-model="text" />
      <p>Value: {{ text }}</p>
    </div>
  `
})
export const Default = Template.bind({})
