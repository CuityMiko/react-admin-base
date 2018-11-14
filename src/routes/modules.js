export default {
    menus: [ // 菜单相关路由
        { key: '/main/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        { key: '/main/dome/index', title: 'Demo', icon: 'laptop', component: 'Demo' },
        {
            key: '/main/table', title: '表格', icon: 'copy',
            subs: [
                { key: '/main/table/basicTable', title: '基础表格', component: 'BasicTable'},
                { key: '/main/table/advancedTable', title: '高级表格', component: 'AdvancedTable'},
                { key: '/main/table/asynchronousTable', title: '异步表格', component: 'AsynchronousTable'},
            ],
        },
        {
            key: '/main/form', title: '表单', icon: 'edit',
            subs: [
                { key: '/main/form/basicForm', title: '基础表单', component: 'BasicForm'},
            ],
        },
        {
            key: '/main/auth', title: '权限管理', icon: 'safety',
            subs: [
                { key: '/main/auth/basic', title: '基础演示', component: 'AuthBasic' },
                { key: '/main/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
            ],
        }
    ],
    others: [
        {
            key: '/main/demo/index/:id', title: 'Demo', component: 'Demo'
        }
    ] // 非菜单相关路由
}