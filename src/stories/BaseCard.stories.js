import BaseCard from '../components/BaseCard.vue'
import BaseButton from '../components/BaseButton.vue'
export default {
    title: 'Components/BaseCard',
    component: BaseCard
}
export const Default = () => ({
    components: { BaseCard, BaseButton },
    template: `
    <BaseCard>
      <h3>Carte simple</h3>
      <p>Un exemple de contenu dans une carte.</p>
      <BaseButton @click="console.log('test')">Action</BaseButton>
    </BaseCard>
  `
})