import Home from '../Pages/Home/index.js';
import ListProduct from '../Pages/ListProduct/index.js';
import Product from '../Pages/Product/index.js';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        stt: -1,
    },
    {
        path: '/dien-thoai',
        component: ListProduct,
        stt: 0,
    },
    {
        path: '/lap-top',
        component: ListProduct,
        stt: 1,
    },
    {
        path: '/tab-let',
        component: ListProduct,
        stt: 2,
    },
    {
        path: '/dong-ho',
        component: ListProduct,
        stt: 3,
    },
    {
        path: '/tai-nghe',
        component: ListProduct,
        stt: 4,
    },
    {
        path: '/san-pham/:id',
        component: Product,
    },
];

export { publicRoutes };
