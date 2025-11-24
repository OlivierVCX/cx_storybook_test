import BaseButton from '../components/BaseButton.vue'
export default {
    title: 'Components/BaseButton',
    component: BaseButton,
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary'] },
        click: { action: 'clicked' }
    }
}
const Template = (args) => ({
    components: { BaseButton },
    setup() { return { args } },
    template: '<BaseButton v-bind="args">Click me</BaseButton>'
})
export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }
export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }