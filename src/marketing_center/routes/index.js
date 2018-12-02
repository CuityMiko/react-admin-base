/**
 * 营销中心
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

const MarketingCenter = Loadable({ 
    loader: () => import('../containers/index'),
    loading: Loading
});

export default {
    MarketingCenter
}