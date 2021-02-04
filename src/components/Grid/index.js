import GridComponent from './Grid'
import GridItemComponent from './GridItem'

export default Vue => {
    Vue.component(GridComponent.name, GridComponent)
    Vue.component(GridItemComponent.name, GridItemComponent)
}