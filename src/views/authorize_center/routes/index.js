/**
 * 授权中心
 */
import Loadable from 'react-loadable';
import {Loading} from '@/components/widget';

const AuthorizeCenter = Loadable({ 
    loader: () => import('../Index'),
    loading: Loading
});

export default {
    AuthorizeCenter
}