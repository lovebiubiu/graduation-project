import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/Front/mainpage'
import news from '@/Front/newspage'
import dataPlayer from '@/Front/dataPlayerpage'
import dataTeam from '@/Front/dataTeampage'
import schedule from '@/Front/schedulepage'
import dataPlayerDetail from '@/Front/dataPlayerDetail'
import dataTeamDetail from '@/Front/dataTeamDetail'

import bgindex from '@/Backstage/backgroundIndex'
import login from '@/Backstage/login'
import scrollPicture from '@/Backstage/scrollPicture'
import friendlyLink from '@/Backstage/friendlyLink'
import addFriendlyLink from '@/Backstage/addFriendlyLink'
import playerDataInput from '@/Backstage/playerDataInput'
import playerDataManagement from '@/Backstage/playerDataManagement'
import teamDataInput from '@/Backstage/teamDataInput'
import teamDataManagement from '@/Backstage/teamDataManagement'
import addNews from '@/Backstage/addNews'
import newsManagement from '@/Backstage/newsManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NBA数据库',
      component: mainpage
    },
    {
      path: '/news',
      name: '新闻页面',
      component: news
    },
    {
      path: '/dataPlayer',
      name: '球员数据页',
      component: dataPlayer
    },
    {
      path: '/dataPlayerDetail',
      name: '球员数据详情页',
      component: dataPlayerDetail
    },
    {
      path: '/dataTeam',
      name: '球队数据页',
      component: dataTeam
    },
    {
      path: '/dataTeamDetail',
      name: '球队数据详情页',
      component: dataTeamDetail
    },
    {
      path: '/schedule',
      name: '赛程安排页',
      component: schedule
    },
    {
      path: '/admin/index',
      name: '后台主页',
      component: bgindex
    },
    {
      path: '/admin/login',
      name: '登录页面',
      component: login
    },
    {
      path: '/admin/scrollPicture',
      name: '图片轮播管理',
      component: scrollPicture
    },
    {
      path: '/admin/friendlyLink',
      name: '友情链接管理',
      component: friendlyLink
    },
    {
      path: '/admin/addFriendlyLink',
      name: '新增友情链接',
      component: addFriendlyLink
    },
    {
      path: '/admin/playerDataInput',
      name: '球员数据录入',
      component: playerDataInput
    },
    {
      path: '/admin/playerDataManagement',
      name: '球员数据管理',
      component: playerDataManagement
    },

    {
      path: '/admin/teamDataInput',
      name: '球队数据录入',
      component: teamDataInput
    },
    {
      path: '/admin/teamDataManagement',
      name: '球队数据管理',
      component: teamDataManagement
    },
    {
      path: '/admin/addNews',
      name: '添加新闻',
      component: addNews
    },
    {
      path: '/admin/newsManagement',
      name: '管理新闻',
      component: newsManagement
    },
  ]
})
