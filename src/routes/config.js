export default {
    menus: [ // 菜单相关路由
        { key: '/main/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/main/table', title: '表格', icon: 'copy',
            subs: [
                { key: '/main/table/basicTable', title: '基础表格', component: 'BasicTable'}
            ],
        },
        {
            key: '/main/form', title: '表单', icon: 'edit',
            subs: [
                { key: '/main/form/basicForm', title: '基础表单', component: 'BasicForm'},
            ],
        }
    ],
    others: [
        {
            key: '/main/demo/index/:id', title: 'Demo', component: 'Demo'
        }
    ] // 非菜单相关路由
}