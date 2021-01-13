import CardComponent from './Card'
import CardHeaderComponent from './CardHeader'
import CardBodyComponent from './CardBody'
import CardFooterComponent from './CardFooter'

export default Vue => {
    Vue.component(CardComponent.name, CardComponent)
    Vue.component(CardBodyComponent.name, CardBodyComponent)
    Vue.component(CardHeaderComponent.name, CardHeaderComponent)
    Vue.component(CardFooterComponent.name, CardFooterComponent)
}