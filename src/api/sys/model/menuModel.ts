import { RouteMeta } from '/@/router/types';
export interface RouteItem {
  id: string;
  path: string;
  component: any;
  meta: RouteMeta;
  name?: string;
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

/**
 * @description: Get menu interface
 */
export interface getMenuListByIdParams {
  id: number | string;
}

/**
 * @description: Get menu return value
 */
export type getMenuListByIdParamsResultModel = RouteItem[];
