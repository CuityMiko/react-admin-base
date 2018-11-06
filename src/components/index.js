/**
 * 路由组件出口文件
 */
import Loadable from 'react-loadable';
import Loading from './loading';
import WLoading from './widget/Loading';

// 按需加载
const BasicForm = Loadable({
    loader: () => import('./forms/BasicForm'),
    loading: Loading
});

const BasicTable = Loadable({ 
    loader: () => import('./tables/BasicTables'),
    loading: Loading
});

const AdvancedTable = Loadable({ 
    loader: () => import('./tables/AdvancedTables'),
    loading: Loading
});

const AsynchronousTable = Loadable({ 
    loader: () => import('./tables/AsynchronousTable'),
    loading: Loading
});

const Echarts = Loadable({ 
    loader: () => import('./charts/Echarts'),
    loading: Loading
});

const Recharts = Loadable({ 
    loader: () => import('./charts/Recharts'),
    loading: Loading
});


const Icons = Loadable({ 
    loader: () => import('./ui/Icons'),
    loading: Loading
});

const Buttons = Loadable({ 
    loader: () => import('./ui/Buttons'),
    loading: Loading
});

const Spins = Loadable({ 
    loader: () => import('./ui/Spins'),
    loading: Loading
});

const Modals = Loadable({ 
    loader: () => import('./ui/Modals'),
    loading: Loading
});

const Notifications = Loadable({ 
    loader: () => import('./ui/Notifications'),
    loading: Loading
});

const Tabs = Loadable({ 
    loader: () => import('./ui/Tabs'),
    loading: Loading
});

const Banners = Loadable({ 
    loader: () => import('./ui/banners'),
    loading: Loading
});

const Drags = Loadable({ 
    loader: () => import('./ui/Draggable'),
    loading: Loading
});

const Dashboard = Loadable({ 
    loader: () => import('./dashboard/Dashboard'),
    loading: Loading
});

const Gallery = Loadable({ 
    loader: () => import('./ui/Gallery'),
    loading: Loading
});

const BasicAnimations = Loadable({ 
    loader: () => import('./animation/BasicAnimations'),
    loading: Loading
});

const ExampleAnimations = Loadable({ 
    loader: () => import('./animation/ExampleAnimations'),
    loading: Loading
});

const AuthBasic = Loadable({ 
    loader: () => import('./auth/Basic'),
    loading: Loading
});

const RouterEnter = Loadable({ 
    loader: () => import('./auth/RouterEnter'),
    loading: Loading
});

const Cssmodule = Loadable({ 
    loader: () => import('./cssmodule'),
    loading: Loading
});

const MapUi = Loadable({ 
    loader: () => import('./ui/map'),
    loading: Loading
});

const WysiwygBundle = Loadable({ 
    loader: () => import('./ui/Wysiwyg'),
    loading: WLoading // 文本页面单独的加载效果
});

const Demo = Loadable({ 
    loader: () => import('./demo/Demo'),
    loading: Loading
});

export default {
    BasicForm, BasicTable, AdvancedTable, AsynchronousTable,
    Echarts, Recharts, Icons, Buttons, Spins, Modals, Notifications,
    Tabs, Banners, Drags, Dashboard, Gallery, BasicAnimations,
    ExampleAnimations, AuthBasic, RouterEnter, WysiwygBundle,
    Cssmodule, MapUi, Demo
}