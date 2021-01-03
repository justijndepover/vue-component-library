import * as Components from './components';

const UI = {
    install(Vue) {
        Object.values(Components).forEach((Component) => {
            Vue.use(Component)
        });
    }
};

export default UI;