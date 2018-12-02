/**
 * Demo
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

const BasicForm = Loadable({
    loader: () => import('../forms/BasicForm'),
    loading: Loading
});

const BasicTable = Loadable({ 
    loader: () => import('../tables/BasicTables'),
    loading: Loading
});

export default {
    BasicForm,
    BasicTable
}