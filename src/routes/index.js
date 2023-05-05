import Home from '../Pages/Home/index.js';
import Product from '../Pages/Product/index.js';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        stt: -1,
    },
    {
        path: '/dien-thoai',
        component: Product,
        stt: 0,
    },
    {
        path: '/lap-top',
        component: Product,
        stt: 1,
    },
    {
        path: '/tab-let',
        component: Product,
        stt: 2,
    },
    {
        path: '/dong-ho',
        component: Product,
        stt: 3,
    },
    {
        path: '/tai-nghe',
        component: Product,
        stt: 4,
    },
];

export { publicRoutes };
