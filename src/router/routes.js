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
const Erou = resolve => {
    require.ensure(['../usuario/404.vue'], () => {
        resolve(require('../usuario/404.vue'));
    });
};
const CriarViagem = resolve => {
    require.ensure(['../usuario/CrirarViagem.vue'], () => {
        resolve(require('../usuario/CrirarViagem.vue'));
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
        path: '/viagem',
        components: {
            default: CriarViagem,
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
        path: '/login',
        components: {
            default: Login,
        },

    },
    {
        path: '*',
        component: Erou,
    }
]