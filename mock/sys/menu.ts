import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Welcome',
  component: '/dashboard/analysis/index',
  meta: {
    title: 'routes.dashboard.analysis',
    affix: true,
    icon: 'bx:bx-home',
  },
};

const frontRoute = {
  path: 'front',
  name: 'PermissionFrontDemo',
  meta: {
    title: 'routes.demo.permission.front',
  },
  children: [
    {
      path: 'page',
      name: 'FrontPageAuth',
      component: '/demo/permission/front/index',
      meta: {
        title: 'routes.demo.permission.frontPage',
      },
    },
    {
      path: 'btn',
      name: 'FrontBtnAuth',
      component: '/demo/permission/front/Btn',
      meta: {
        title: 'routes.demo.permission.frontBtn',
      },
    },
    {
      path: 'auth-pageA',
      name: 'FrontAuthPageA',
      component: '/demo/permission/front/AuthPageA',
      meta: {
        title: 'routes.demo.permission.frontTestA',
      },
    },
    {
      path: 'auth-pageB',
      name: 'FrontAuthPageB',
      component: '/demo/permission/front/AuthPageB',
      meta: {
        title: 'routes.demo.permission.frontTestB',
      },
    },
  ],
};
const backRoute = {
  path: 'back',
  name: 'PermissionBackDemo',
  meta: {
    title: 'routes.demo.permission.back',
  },

  children: [
    {
      path: 'page',
      name: 'BackAuthPage',
      component: '/demo/permission/back/index',
      meta: {
        title: 'routes.demo.permission.backPage',
      },
    },
    {
      path: 'btn',
      name: 'BackAuthBtn',
      component: '/demo/permission/back/Btn',
      meta: {
        title: 'routes.demo.permission.backBtn',
      },
    },
  ],
};
const authRoute = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.permission.permission',
  },
  children: [frontRoute, backRoute],
};

const authRoute1 = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.permission.permission',
  },
  children: [backRoute],
};

const levelRoute = {
  path: '/level',
  name: 'Level',
  component: 'LAYOUT',
  redirect: '/level/menu1/menu1-1',
  meta: {
    icon: 'carbon:user-role',
    title: 'routes.demo.level.level',
  },

  children: [
    {
      path: 'menu1',
      name: 'Menu1Demo',
      meta: {
        title: 'Menu1',
      },
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          meta: {
            title: 'Menu1-1',
          },
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: '/demo/level/Menu111',
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
        {
          path: 'menu1-2',
          name: 'Menu12Demo',
          component: '/demo/level/Menu12',
          meta: {
            title: 'Menu1-2',
          },
        },
      ],
    },
    {
      path: 'menu2',
      name: 'Menu2Demo',
      component: '/demo/level/Menu2',
      meta: {
        title: 'Menu2',
      },
    },
  ],
};

const lamboRoute = [
  {"id":13081,"permissionId":"1362929080776826880","pid":"0","name":"系统管理","label":"系统管理","type":1,"permissionValue":"1","uri":"","icon":"md-cog","status":1,"orders":1613782589519},
  {"id":13084,"permissionId":"1362929687659061248","pid":"1362929080776826880","name":"用户管理","label":"用户管理","type":2,"permissionValue":"1","uri":"","icon":"ios-person","status":1,"orders":1613782704485},
  {"id":13095,"permissionId":"1362935110919299072","pid":"1362929080776826880","name":"角色管理","label":"角色管理","type":2,"permissionValue":"1","uri":"","icon":"md-person-add","status":1,"orders":1613782725388},
  {"id":13083,"permissionId":"1362929650682077184","pid":"1362929080776826880","name":"组织管理","label":"组织管理","type":2,"permissionValue":"1","uri":"","icon":"ios-color-filter","status":1,"orders":1613782734204},
  {"id":13085,"permissionId":"1362932675471515648","pid":"1362929687659061248","name":"新增用户","label":"新增用户","type":3,"permissionValue":"uc:user:create","uri":"","icon":"","status":1,"orders":1613783446554},
  {"id":13086,"permissionId":"1362932987649368064","pid":"1362929687659061248","name":"用户删除","label":"用户删除","type":3,"permissionValue":"uc:user:delete","uri":"","icon":"","status":1,"orders":1613783520983},
  {"id":13087,"permissionId":"1362933030280273920","pid":"1362929687659061248","name":"用户编辑","label":"用户编辑","type":3,"permissionValue":"uc:user:update","uri":"","icon":"","status":1,"orders":1613783531147},
  {"id":13088,"permissionId":"1362933103038865408","pid":"1362929687659061248","name":"重置密码","label":"重置密码","type":3,"permissionValue":"uc:user:resetpassword","uri":"","icon":"","status":1,"orders":1613783548494},
  {"id":13089,"permissionId":"1362933124685668352","pid":"1362929687659061248","name":"数据权限","label":"数据权限","type":3,"permissionValue":"uc:user:changedatapermission","uri":"","icon":"","status":1,"orders":1613783553655},
  {"id":13090,"permissionId":"1362933191521902592","pid":"1362929687659061248","name":"用户角色","label":"用户角色","type":3,"permissionValue":"uc:user:changerole","uri":"","icon":"","status":1,"orders":1613783569590},
  {"id":13091,"permissionId":"1362933225172803584","pid":"1362929687659061248","name":"新增用户","label":"新增用户","type":3,"permissionValue":"uc:user:create","uri":"","icon":"","status":1,"orders":1613783577613},
  {"id":13093,"permissionId":"1362934088150851584","pid":"1362929687659061248","name":"SystemUserCreatePage","label":"用户新增","type":4,"permissionValue":"uc:user:create","uri":"","icon":"","status":1,"orders":1613783783363},
  {"id":13082,"permissionId":"1362929563008540672","pid":"1362929080776826880","name":"RTOnlineUserManage","label":"实时在线用户管理","type":2,"permissionValue":"upms:realtimeonlineuser:manage","uri":"","icon":"ios-radio","status":1,"orders":1613784027210},
  {"id":13096,"permissionId":"1362935505200652288","pid":"1362929687659061248","name":"修改用户","label":"修改用户","type":4,"permissionValue":"1","uri":"","icon":"","status":1,"orders":1613784121214},
  {"id":13097,"permissionId":"1362935560859066368","pid":"1362935110919299072","name":"修改角色","label":"修改角色","type":4,"permissionValue":"1","uri":"","icon":"","status":1,"orders":1613784134484},
  {"id":13098,"permissionId":"1362935594887454720","pid":"1362935110919299072","name":"新增角色","label":"新增角色","type":4,"permissionValue":"1","uri":"","icon":"","status":1,"orders":1613784142597},
  {"id":13099,"permissionId":"1362938300419055616","pid":"0","name":"流程管理","label":"流程管理","type":1,"permissionValue":"1","uri":"","icon":"md-paper","status":1,"orders":1613784787646},
  {"id":13100,"permissionId":"1362938635313258496","pid":"1364407409384136704","name":"流程定义列表","label":"流程定义列表","type":2,"permissionValue":"workflow:repository:list","uri":"","icon":"ios-cube","status":1,"orders":1613784867491},
  {"id":13101,"permissionId":"1362938796038987776","pid":"1362938635313258496","name":"流程定义","label":"流程定义","type":4,"permissionValue":"workflow:repository:create","uri":"","icon":"","status":1,"orders":1613784905811},
  {"id":13102,"permissionId":"1362939121240154112","pid":"1364407100326846464","name":"待办任务","label":"待办任务","type":2,"permissionValue":"workflow:todo:list","uri":"","icon":"ios-walk","status":1,"orders":1613784983345},
  {"id":13103,"permissionId":"1362939285761728512","pid":"1364407100326846464","name":"已办任务","label":"已办任务","type":2,"permissionValue":"workflow:done:list","uri":"","icon":"md-filing","status":1,"orders":1613785022570},
  {"id":13104,"permissionId":"1362939438841241600","pid":"1364407100326846464","name":"办结流程","label":"办结流程","type":2,"permissionValue":"workflow:conclusion:list","uri":"","icon":"ios-git-compare","status":1,"orders":1613785059067},
  {"id":13105,"permissionId":"1362939607347404800","pid":"1364407100326846464","name":"我的流程","label":"我的流程","type":2,"permissionValue":"workflow:myprocess:list","uri":"","icon":"ios-trending-up","status":1,"orders":1613785099242},
  {"id":13176,"permissionId":"1364407100326846464","pid":"0","name":"个人办公","label":"个人办公","type":1,"permissionValue":"","uri":"","icon":"ios-paper","status":1,"orders":1614134976833},
  {"id":13177,"permissionId":"1364407409384136704","pid":"0","name":"流程设计","label":"流程设计","type":1,"permissionValue":"","uri":"","icon":"ios-build","status":1,"orders":1614135050518},
  {"id":13179,"permissionId":"1364408010801192960","pid":"1362938300419055616","name":"历史流程","label":"历史流程","type":2,"permissionValue":"workflow:history:process","uri":"","icon":"md-filing","status":1,"orders":1614135193907},
  {"id":13180,"permissionId":"1364408278376816640","pid":"1362938300419055616","name":"历史任务","label":"历史任务","type":2,"permissionValue":"workflow:history:task","uri":"","icon":"md-document","status":1,"orders":1614135257702},
  {"id":13181,"permissionId":"1364408573873922048","pid":"1362938300419055616","name":"流程实例","label":"流程实例","type":2,"permissionValue":"workflow:process:instances","uri":"","icon":"ios-shuffle","status":1,"orders":1614135328154},
  {"id":13182,"permissionId":"1364410153855655936","pid":"1364407409384136704","name":"流程监听","label":"流程监听","type":2,"permissionValue":"workflow:process:listener","uri":"","icon":"ios-git-branch","status":1,"orders":1614135704851},
  {"id":14202,"permissionId":"1367376604168683520","pid":"1364410153855655936","name":"维护监听器","label":"维护监听器","type":4,"permissionValue":"workflow:process:listeneredit","uri":"","icon":"","status":1,"orders":1614842961719}];
export default [
  {
    url: '/basic-api/getMenuListById',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(lamboRoute);
    },
  },
] as MockMethod[];
