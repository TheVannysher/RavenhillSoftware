import { NGIcons } from 'src/app/icons';

import { RouteCategories, RouteFullPaths, RouteNames } from '#lib/enum/routes';
import { RouteData, RouteIconTypes } from '#types/navigation/routes.types';

const ROUTES_DATA: Record<RouteNames, RouteData> = {
  login: {
    category: RouteCategories.LOGIN,
    fullPath: RouteFullPaths.LOGIN,
    name: RouteNames.LOGIN,
  },
  overview: {
    category: RouteCategories.HOME,
    color: '--clr-green-500',
    name: RouteNames.OVERVIEW,
    fullPath: RouteFullPaths.OVERVIEW,
    icon: {
      type: RouteIconTypes.CUSTOM,
      src: 'assets/logo.svg',
    },
  },
  profile: {
    category: RouteCategories.HOME,
    color: '--clr-blue-500',
    name: RouteNames.USER_PROFILE,
    fullPath: RouteFullPaths.USER_PROFILE,
    icon: {
      type: RouteIconTypes.NG_ICON,
      src: NGIcons.feather.User,
    },
  },
  taskboard: {
    category: RouteCategories.HOME,
    color: '--clr-orange-500',
    name: RouteNames.TASKBOARD,
    fullPath: RouteFullPaths.TASKBOARD,
    icon: {
      type: RouteIconTypes.NG_ICON,
      src: NGIcons.feather.Zap,
    },
  },
};

export default ROUTES_DATA;
