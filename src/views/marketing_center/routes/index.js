/**
 * 营销中心
 */
import Loadable from 'react-loadable';
import {Loading} from '@/components/widget';

const MarketingCenter = Loadable({ 
    loader: () => import('../Index'),
    loading: Loading
});

export default {
    MarketingCenter
}