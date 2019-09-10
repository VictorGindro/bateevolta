import Card from '../components/Card.vue';
import Popup from '../components/Popup.vue';
import Header from '../components/Header.vue';
// Lazy loading
const Login = resolve => {
    require.ensure(['../usuario/Login.vue'], () => {
        resolve(require('../usuario/Login.vue'));
    });
};
const List = resolve => {
    require.ensure(['../usuario/List.vue'], () => {
        resolve(require('../usuario/List.vue'));
    });
};
const Create = resolve => {
    require.ensure(['../organizador/Criar.vue'], () => {
        resolve(require('../organizador/Criar.vue'));
    });
};
export const routes = [{
        path: '/listar',
        components: {
            default: List,
            'card': Card,
            'popup': Popup,
            'header': Header
        },
    },
    {
        path: '/criar',
        components: {
            default: Create,
            'header': Header
        },

    },
    {
        path: '*',
        component: Login,
    }
]