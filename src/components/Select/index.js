import SelectComponent from './Select'
import SelectNativeComponent from './SelectNative'

export default Vue => {
    Vue.component(SelectComponent.name, SelectComponent)
    Vue.component(SelectNativeComponent.name, SelectNativeComponent)
}