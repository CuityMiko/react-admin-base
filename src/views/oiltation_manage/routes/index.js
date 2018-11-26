/**
 * 油站管理
 */
import Loadable from 'react-loadable';
import {Loading} from '@/components/widget';

const OiltationManage = Loadable({ 
    loader: () => import('../Index'),
    loading: Loading
});

export default {
    OiltationManage
}