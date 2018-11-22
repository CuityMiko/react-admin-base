export default {
    menus: [ // 菜单相关路由
        { key: '/main/index', title: '首页', icon: 'mobile', component: 'Home'},
        { key: '/main/authorize_center', title: '授权中心', icon: 'solution', component: 'AuthorizeCenter'},
        { key: '/main/data_center', title: '数据中心', icon: 'database', component: 'DataCenter'},
        { key: '/main/marketing_center', title: '营销中心', icon: 'flag', component: 'MarketingCenter'},
        { key: '/main/member_center', title: '会员中心', icon: 'team', component: 'MemberCenter'},
        { key: '/main/oil_manage', title: '油品管理', icon: 'global', component: 'OilManage'},
        { key: '/main/oiltation_manage', title: '油站管理', icon: 'shop', component: 'OiltationManage'},
        {
            key: '/main/demo/table', title: 'Demo', icon: 'bars',
            subs: [
                { key: '/main/demo/table/basicTable', title: '基础表格', component: 'BasicTable'},
                { key: '/main/demo/form/basicForm', title: '基础表单', component: 'BasicForm'}
            ],
        }
    ],
    others: [
        {
            key: '/main/demo/index/:id', title: 'Demo', component: 'Demo'
        }
    ] // 非菜单相关路由
}