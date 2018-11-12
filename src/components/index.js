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

const Dashboard = Loadable({ 
    loader: () => import('./dashboard/Dashboard'),
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

const Demo = Loadable({ 
    loader: () => import('./demo/Demo'),
    loading: Loading
});

export default {
    BasicForm, BasicTable, AdvancedTable, AsynchronousTable,
    Echarts, Recharts, Dashboard, BasicAnimations,
    ExampleAnimations, AuthBasic, RouterEnter,
    Cssmodule, Demo
}