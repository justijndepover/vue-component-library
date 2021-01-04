import * as Components from './components';

const UI = {
    install(Vue) {
        Object.values(Components).forEach((Component) => {
            Vue.use(Component)
        });
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UI);
}

export default UI;