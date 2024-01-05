import { RouteCategories, RouteFullPaths, RouteNames } from "src/lib/enum/routes";

export enum RouteIconTypes {
    NG_ICON = 'ng-icon',
    CUSTOM = 'custom',
}

export interface RouteIcon {
    type: RouteIconTypes,
    src: string,
}

export interface RouteData {
    category: RouteCategories | string,
    name: RouteNames | string,
    fullPath: RouteFullPaths,
    icon?: RouteIcon,
    color?: string,
}