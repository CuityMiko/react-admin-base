/**
 * 路由组件出口文件
 */
import Loadable from 'react-loadable';
import {Loading} from '../components/widget';

// 按需加载
const BasicForm = Loadable({
    loader: () => import('../containers/forms/BasicForm'),
    loading: Loading
});

const BasicTable = Loadable({ 
    loader: () => import('../containers/tables/BasicTables'),
    loading: Loading
});

const Dashboard = Loadable({ 
    loader: () => import('../containers/dashboard/Dashboard'),
    loading: Loading
});

export default {
    BasicForm, BasicTable, Dashboard
}