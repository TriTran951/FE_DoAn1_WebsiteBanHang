import Home from '../Pages/Home/index.js';
import Phone from '../Pages/Phone/index.js';
import Laptop from '../Pages/Laptop/index.js';
import Tablet from '../Pages/Tablet/index.js';
import Smartwatch from '../Pages/Smartwatch/index.js';
import Headphone from '../Pages/Headphone/index.js';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/dien-thoai',
        component: Phone,
    },
    {
        path: '/lap-top',
        component: Laptop,
    },
    {
        path: '/tab-let',
        component: Tablet,
    },
    {
        path: '/dong-ho',
        component: Smartwatch,
    },
    {
        path: '/tai-nghe',
        component: Headphone,
    },
];

export { publicRoutes };
