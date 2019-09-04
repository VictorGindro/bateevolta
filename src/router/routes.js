import Card from '../components/Card.vue';
import Popup from '../components/Popup.vue';
import Header from '../components/Header.vue';
// Lazy loading
const Login = resolve => {
    require.ensure(['../pages/Login.vue'], () => {
        resolve(require('../pages/Login.vue'));
    });
};
const List = resolve => {
    require.ensure(['../pages/List.vue'], () => {
        resolve(require('../pages/List.vue'));
    });
};
const Create = resolve => {
    require.ensure(['../pages/Criar.vue'], () => {
        resolve(require('../pages/Criar.vue'));
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