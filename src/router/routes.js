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
const organizadorViagens = resolve => {
    require.ensure(['../usuario/organizadorViagem.vue'], () => {
        resolve(require('../usuario/organizadorViagem.vue'));
    });
};
export const routes = [{
        path: '/listar',
        components: {
            default: List,
            'card': Card,
            'popup': Popup
        },
        meta: {
            auth: true
        }
    },
    {
        path: '/organizador/viagens',
        components: {
            default: organizadorViagens,
            'card': Card,
            'popup': Popup
        },
        meta: {
            auth: true
        }
    },
    {
        path: '/home',
        components: {
            default: Home,
        },
        meta: {
            auth: false
        }

    },
    {
        path: '/viagem/criar',
        components: {
            default: CriarViagem,
        },
        meta: {
            auth: true
        }

    },
    {
        path: '/criar',
        components: {
            default: Create,
        },
        meta: {
            auth: true
        }

    },
    {
        path: '/turista/compras',
        components: {
            default: Compras,
        },
        meta: {
            auth: true
        }

    },
    {
        path: '/login',
        components: {
            default: Login,
        },
        meta: {
            auth: false
        }

    },
    {
        path: '/*',
        component: Home,
    },
    {
        path: 'error',
        component: Erou
    }
]