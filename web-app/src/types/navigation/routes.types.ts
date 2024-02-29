import { RouteCategories, RouteFullPaths, RouteNames } from '#lib/enum/routes';

export enum RouteIconTypes {
  NG_ICON = 'ng-icon',
  CUSTOM = 'custom',
}

export interface RouteIcon {
  type: RouteIconTypes,
  src: string,
}

export interface RouteData {
  category: RouteCategories,
  name: RouteNames,
  fullPath: RouteFullPaths,
  icon?: RouteIcon,
}
