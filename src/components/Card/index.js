import CardComponent from './Card'
import CardBodyComponent from './CardBody'
import CardFooterComponent from './CardFooter'

export default Vue => {
    Vue.component(CardComponent.name, CardComponent)
    Vue.component(CardBodyComponent.name, CardBodyComponent)
    Vue.component(CardFooterComponent.name, CardFooterComponent)
}