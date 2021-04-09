import { defHttp } from '/@/utils/http/axios';
import { getMenuListByIdParams, RouteItem } from './model/menuModel';

enum Api {
  GetMenuListById = '/getMenuListById',
}

interface MenuItem {
  permissionId: string;
  pid: string;
  name: string;
  label: string;
  type: number;
  permissionValue?: string;
  uri?: string;
  icon?: string;
}
const transformListToTree = (
  menuList: MenuItem[],
  routeList: RouteItem[],
  parentRouteItem: RouteItem | null,
  root: boolean
): RouteItem[] => {
  if (!menuList || menuList.length === 0) {
    return routeList;
  }
  //for (let item of menuList) {
  for (let i=0; i<menuList.length;i++){
    const item = menuList[i];
    const routeItem: RouteItem = {
      id: item.permissionId,
      path: '/' + i,
      component: '/dashboard/workbench/index',
      name: item.label,
      meta: {
        title: item.label,
      },
    };
    if (root && item.pid === '0') {
      routeList.push(routeItem);
      transformListToTree(menuList, routeList, routeItem, false);
    } else if (parentRouteItem && item.pid == parentRouteItem.id) {
      if (parentRouteItem.children) {
        parentRouteItem.children.push(routeItem);
      } else {
        parentRouteItem.children = [routeItem];
      }
      transformListToTree(menuList, routeList, routeItem, false);
    }
  }
  return routeList;
};

/**
 * @description: Get user menu based on id
 */

export const getMenuListById = async (params: getMenuListByIdParams | null) => {
  const menuList: MenuItem[] = await defHttp.get<MenuItem[]>({ url: Api.GetMenuListById, params });
  const routeList = transformListToTree(menuList, [], null, true);
  return routeList;
};
