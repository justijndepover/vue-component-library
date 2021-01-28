import TableComponent from './Table'
import TheadComponent from './Thead'
import TbodyComponent from './Tbody'
import TdComponent from './Td'
import ThComponent from './Th'
import TrComponent from './Tr'

export default Vue => {
    Vue.component(TableComponent.name, TableComponent)
    Vue.component(TheadComponent.name, TheadComponent)
    Vue.component(TbodyComponent.name, TbodyComponent)
    Vue.component(TdComponent.name, TdComponent)
    Vue.component(ThComponent.name, ThComponent)
    Vue.component(TrComponent.name, TrComponent)
}