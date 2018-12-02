/**
 * Demo
 */

export default {
    menus: [ // 菜单相关路由
        {
            key: '/main/demo/table', title: 'Demo', icon: 'bars',
            subs: [
                { key: '/main/demo/table/basicTable', title: '基础表格', component: 'BasicTable'},
                { key: '/main/demo/form/basicForm', title: '基础表单', component: 'BasicForm'}
            ]
        }
    ],
    others: [ // 非菜单相关路由
        {key: '/main/demo/form/basicForm/:id', title: 'BasicForm', component: 'BasicForm'}
    ]
}