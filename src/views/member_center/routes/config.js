/**
 * 会员中心
 */

export default {
    menus: [ // 菜单相关路由
        {
            key: '/main/demo/member_center', title: '会员中心', icon: 'team',
            subs: [
                { key: '/main/demo/member_center/member_card_setting', title: '会员卡设置', component: 'MemberCardSetting'},
                { key: '/main/demo/member_center/member_list', title: '会员列表', component: 'MemberList'},
                { key: '/main/demo/member_center/member_analysis', title: '会员分析', component: 'MemberAnalysis'},
                { key: '/main/demo/member_center/oil_card', title: '加油卡', component: 'OilCard'},
                { key: '/main/demo/member_center/point_mall', title: '积分商城', component: 'PointMall'}
            ],
        }
    ],
    others: [ // 非菜单相关路由
    ]
}