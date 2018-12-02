/**
 * 会员中心
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

/**
 * 会员列表
 */
const MemberList = Loadable({ 
    loader: () => import('../member_list/index'),
    loading: Loading
});

/**
 * 会员分析
 */
const MemberAnalysis = Loadable({ 
    loader: () => import('../member_analysis/index'),
    loading: Loading
});

/**
 * 会员卡设置
 */
const MemberCardSetting = Loadable({ 
    loader: () => import('../member_card_setting/index'),
    loading: Loading
});

/**
 * 加油卡
 */
const OilCard = Loadable({ 
    loader: () => import('../oil_card/index'),
    loading: Loading
});

/**
 * 积分商城
 */
const PointMall = Loadable({ 
    loader: () => import('../point_mall/index'),
    loading: Loading
});

export default {
    MemberList,
    MemberAnalysis,
    MemberCardSetting,
    OilCard,
    PointMall
}