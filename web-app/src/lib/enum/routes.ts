export enum ROUTES_PATH {
    profile = 'profile',
    vines = 'vines',
    taskboard = 'taskboard',
    login = 'login'
}


// order matters
export const BOTTOM_NAV_ROUTES = [
    ROUTES_PATH.profile,
    ROUTES_PATH.vines,
    ROUTES_PATH.taskboard,
]