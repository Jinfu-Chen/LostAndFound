//框架核心配置
import ColorUI from '../mp-cu/main'
export const colorUI = new ColorUI({
    config: {
        theme: 'auto',
        main: 'blue',
        text: 1,
        footer: true,
        share: true,
        shareTitle: 'MP CU（ ColorUI3.x 原生小程序版）',
        homePath: '/pages/home/home',
        tabBar: [
        {
            title: '模板',
            icon: '/static/tab_icon/tpl.png',
            curIcon: '/static/tab_icon/tpl_cur.png',
            url: '/pages/index/index',
            type: 'tab'
        },
        {
            title: '我的',
            icon: '/static/tab_icon/my.png',
            curIcon: '/static/tab_icon/my_cur.png',
            url: '/pages/mine/mine',
            type: 'tab'
        }],
    }
})