import * as Components from './components';
import * as Directives from './directives';

const UI = {
    install(Vue) {
        Object.values(Components).forEach((Component) => {
            Vue.use(Component);
        });

        Object.values(Directives).forEach((Directive) => {
            Vue.use(Directive);
        });
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UI);
}

export default UI;