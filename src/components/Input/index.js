import TextComponent from './Text'
import TextareaComponent from './Textarea'

export default Vue => {
    Vue.component(TextComponent.name, TextComponent)
    Vue.component(TextareaComponent.name, TextareaComponent)
}