import Card from '../components/Card.vue';
import Popup from '../components/Popup.vue';
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
    require.ensure(['../usuario/Criar.vue'], () => {
        resolve(require('../usuario/Criar.vue'));
    });
};
export const routes = [{
        path: '/listar',
        components: {
            default: List,
            'card': Card,
            'popup': Popup
        },
    },
    {
        path: '/criar',
        components: {
            default: Create,
        },

    },
    {
        path: '*',
        component: Login,
    }
]