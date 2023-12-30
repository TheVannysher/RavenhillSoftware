import { RouteData, RouteIconTypes } from "types/navigation/routes.types";
import { RouteCategories, RouteFullPaths, RouteNames } from "../enum/routes";
import { NG_ICONS } from "src/app/icons";

const ROUTES_DATA: Record<RouteNames, RouteData> = {
    overview: {
        category: RouteCategories.HOME,
        color: '--clr-green-500',
        name: RouteNames.OVERVIEW,
        fullPath: RouteFullPaths.OVERVIEW,
        icon: {
            type: RouteIconTypes.CUSTOM,
            src: 'assets/logo.svg',
        }
    },
    profile: {
        category: RouteCategories.HOME,
        color: '--clr-blue-500',
        name: RouteNames.USER_PROFILE,
        fullPath: RouteFullPaths.USER_PROFILE,
        icon: {
          type: RouteIconTypes.NG_ICON,
          src: NG_ICONS.featherUser,
        }
    },
    taskboard: {
        category: RouteCategories.HOME,
        color: '--clr-orange-500',
        name: RouteNames.TASKBOARD,
        fullPath: RouteFullPaths.TASKBOARD,
        icon: {
            type: RouteIconTypes.NG_ICON,
            src: NG_ICONS.featherZap,
        }
    },
}

export default ROUTES_DATA;