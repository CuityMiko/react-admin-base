/**
 * 数据中心
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

const DataCenter = Loadable({ 
    loader: () => import('../containers/index'),
    loading: Loading
});

export default {
    DataCenter
}