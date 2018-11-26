/**
 * 数据中心
 */
import Loadable from 'react-loadable';
import {Loading} from '@/components/widget';

const DataCenter = Loadable({ 
    loader: () => import('../Index'),
    loading: Loading
});

export default {
    DataCenter
}