/**
 * 路由及菜单配置文件
 */

// 首页
import Home from '@/main/routes/route'
// 会员中心
import MemberCenter from '@/member_center/routes/route'
// 授权中心
import AuthorizeCenter from '@/authorize_center/routes/route'
// 数据中心
import DataCenter from '@/data_center/routes/route'
// 营销中心
import MarketingCenter from '@/marketing_center/routes/route'
// 油品管理
import OilManage from '@/oil_manage/routes/route'
// 油站管理
import OiltationManage from '@/oiltation_manage/routes/route'
// Demo
import Demo from '@/demo/routes/route'

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