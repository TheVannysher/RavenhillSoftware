import { NGIcons } from 'src/app/icons';

import { RouteCategories, RouteFullPaths, RouteNames } from '#lib/enum/routes';
import { RouteData, RouteIconTypes } from '#types/navigation/routes.types';

const ROUTES_DATA: Partial<Record<RouteNames, RouteData>> = {
  login: {
    category: RouteCategories.LOGIN,
    fullPath: RouteFullPaths.LOGIN,
    name: RouteNames.LOGIN,
  },
  overview: {
    category: RouteCategories.HOME,
    name: RouteNames.OVERVIEW,
    fullPath: RouteFullPaths.OVERVIEW,
    icon: {
      type: RouteIconTypes.NG_ICON,
      src: NGIcons.feather.BarChart2,
    },
  },
  profile: {
    category: RouteCategories.HOME,
    name: RouteNames.USER_PROFILE,
    fullPath: RouteFullPaths.USER_PROFILE,
    icon: {
      type: RouteIconTypes.NG_ICON,
      src: NGIcons.feather.User,
    },
  },
  taskboard: {
    category: RouteCategories.HOME,
    name: RouteNames.TASKBOARD,
    fullPath: RouteFullPaths.TASKBOARD,
    icon: {
      type: RouteIconTypes.NG_ICON,
      src: NGIcons.feather.Zap,
    },
  },
  'control-panel': {
    category: RouteCategories.CONTROL_PANEL,
    name: RouteNames.LISTS_PANEL,
    fullPath: RouteFullPaths.CONTROL_PANEL,
    icon: {
      type: RouteIconTypes.NG_ICON,
      src: NGIcons.feather.Settings,
    },
  },
  'lists-panel': {
    category: RouteCategories.CONTROL_PANEL,
    name: RouteNames.LISTS_PANEL,
    fullPath: RouteFullPaths.LIST_PANEL,
  },
};

export default ROUTES_DATA;
