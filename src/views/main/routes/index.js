/**
 * 首页
 */
import Loadable from 'react-loadable';
import {Loading} from '@/components/widget';

const Home = Loadable({ 
    loader: () => import('../Index'),
    loading: Loading
});

export default {
    Home
}