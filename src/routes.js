import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import App from './App';

export const routes = [
    {
        path: '/', name: 'app', components: {
            default: App,
            'page-header': Header,
            'page-footer': Footer,
        },
        children: [
            {path: '', name: 'home', component: Home},
            {
                path: 'productDetail',
                name: 'productDetail',
                component: ProductDetail
            },
            {path: '/login', name: 'login', component: Login},
            {path: '/register', name: 'register', component: Register},
            {path: '/cart', name: 'cart', component: Cart},
        ]
    },
]
