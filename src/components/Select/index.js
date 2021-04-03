import SelectComponent from './Select'
import OptionComponent from './Option'
import SelectNativeComponent from './SelectNative'

export default Vue => {
    Vue.component(SelectComponent.name, SelectComponent)
    Vue.component(OptionComponent.name, OptionComponent)
    Vue.component(SelectNativeComponent.name, SelectNativeComponent)
}