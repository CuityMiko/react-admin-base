/**
 * 路由及菜单配置文件
 */

// 首页
import Home from '@/views/main/routes/config'
// 会员中心
import MemberCenter from '@/views/member_center/routes/config'
// 授权中心
import AuthorizeCenter from '@/views/authorize_center/routes/config'
// 数据中心
import DataCenter from '@/views/data_center/routes/config'
// 营销中心
import MarketingCenter from '@/views/marketing_center/routes/config'
// 油品管理
import OilManage from '@/views/oil_manage/routes/config'
// 油站管理
import OiltationManage from '@/views/oiltation_manage/routes/config'
// Demo
import Demo from '@/views/demo/routes/config'

export default {
    menus: [ // 菜单相关路由
        ...Home.menus,
        ...OiltationManage.menus,
        ...DataCenter.menus,
        ...OilManage.menus,
        ...MemberCenter.menus,
        ...MarketingCenter.menus,
        ...AuthorizeCenter.menus,
        ...Demo.menus,
    ],
    others: [ // 非菜单相关路由
        ...Home.others,
        ...OiltationManage.others,
        ...DataCenter.others,
        ...OilManage.others,
        ...MemberCenter.others,
        ...MarketingCenter.others,
        ...AuthorizeCenter.others,
        ...Demo.others,
    ]
}