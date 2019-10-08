import Card from '../components/Card.vue';
import Popup from '../components/Popup.vue';
// Lazy loading
const Login = resolve => {
    require.ensure(['../usuario/Login.vue'], () => {
        resolve(require('../usuario/Login.vue'));
    });
};
const Home = resolve => {
    require.ensure(['../usuario/Home.vue'], () => {
        resolve(require('../usuario/Home.vue'));
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
const Compras = resolve => {
    require.ensure(['../usuario/Compras.vue'], () => {
        resolve(require('../usuario/Compras.vue'));
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
        path: '/home',
        components: {
            default: Home,
        },

    },
    {
        path: '/criar',
        components: {
            default: Create,
        },

    },
    {
        path: '/compras',
        components: {
            default: Compras,
        },

    },
    {
        path: '*',
        component: Login,
    }
]