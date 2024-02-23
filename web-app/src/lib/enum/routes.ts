export enum RouteFullPaths {
  BLOCK = '/control-panel/blocks',
  CONTROL_PANEL = '/control-panel',
  FIELD_MANAGEMENT = '/control-panel/field_management',
  LIST_PANEL = '/control-panel/lists-panel',
  LOGIN = '/login',
  OVERVIEW = '/home/overview',
  TASKBOARD = '/home/taskboard',
  USER_PROFILE = '/home/profile',
}

export enum RouteNames {
  BLOCK = 'blocks',
  CONTROL_PANEL = 'control-panel',
  FIELD_MANAGEMENT = 'field_management',
  LISTS_PANEL = 'lists-panel',
  LOGIN = 'login',
  OVERVIEW = 'overview',
  SAMPLES = 'samples',
  TASKBOARD = 'taskboard',
  USER_PROFILE = 'profile',
}

export enum RouteCategories {
  CONTROL_PANEL = 'control-panel',
  HOME = 'home',
  LOGIN = 'login',
  SETTINGS = 'settings',
}
/**
 *  Login&register (defaultAccess/public)
 * - Login
 * Home (defaultAccess/authenticated, worker, manager, admin)
 *  - Overview 
 * - Taskboard
 *  - Profile
 *  - Settings
 * Control-panel (admin, manager)
 *  - user management
 *  - field management
 *  - variety management
 *  - samples management
 *  - Vines&Blocks management (blocks automaticly generated from the vines in a field)
 * 
 * 
 */