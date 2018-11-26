/**
 * 油品管理
 */
import Loadable from 'react-loadable';
import {Loading} from '@/components/widget';

const OilManage = Loadable({ 
    loader: () => import('../Index'),
    loading: Loading
});

export default {
    OilManage
}