/**
 * 路由组件出口文件
 */

// 首页
import Home from '@/views/main/routes/index'
// 会员中心
import MemberCenter from '@/views/member_center/routes/index'
// 授权中心
import AuthorizeCenter from '@/views/authorize_center/routes/index'
// 数据中心
import DataCenter from '@/views/data_center/routes/index'
// 营销中心
import MarketingCenter from '@/views/marketing_center/routes/index'
// 油品管理
import OilManage from '@/views/oil_manage/routes/index'
// 油站管理
import OiltationManage from '@/views/oiltation_manage/routes/index'
// Demo
import Demo from '@/views/demo/routes/index'

export default { 
    ...Home, 
    ...AuthorizeCenter, 
    ...DataCenter, 
    ...MarketingCenter, 
    ...MemberCenter, 
    ...OilManage, 
    ...OiltationManage,
    ...Demo
}