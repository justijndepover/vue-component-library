import FieldComponent from './Field'
import FormComponent from './Form'

export default Vue => {
    Vue.component(FieldComponent.name, FieldComponent)
    Vue.component(FormComponent.name, FormComponent)
}