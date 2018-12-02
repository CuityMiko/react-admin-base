/**
 * 首页
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

const Home = Loadable({ 
    loader: () => import('../index'),
    loading: Loading
});

export default {
    Home
}