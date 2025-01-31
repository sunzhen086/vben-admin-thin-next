import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '/@/enums/pageEnum';
import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

export const HomeRoute: AppRouteRecordRaw = {
  path: '',
  name: 'HomeLayout',
  component: LAYOUT,
  meta: { title: '' },
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '首页',
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};


// Basic routing without permission
export const basicRoutes = [LoginRoute, RootRoute, HomeRoute, ...mainOutRoutes, REDIRECT_ROUTE];
