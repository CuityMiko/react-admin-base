/**
 * 油站管理
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

const OiltationManage = Loadable({ 
    loader: () => import('../containers/index'),
    loading: Loading
});

export default {
    OiltationManage
}