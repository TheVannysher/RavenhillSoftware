import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames, RouteCategories, RouteFullPaths } from 'src/lib/enum/routes';

import { OverviewComponent } from './modules/overview/overview.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { TaskboardComponent } from './modules/taskboard/taskboard.component';
import ROUTES_DATA from 'src/lib/routes/routesData';
import { LoginComponent } from './modules/login/login.component';
import { authGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    title: RouteNames.LOGIN,
    path: RouteCategories.LOGIN,
    component: LoginComponent,
  },
  {
    path: RouteCategories.HOME,
    canActivate: [authGuard],
    children: [
      {
        path: RouteNames.OVERVIEW,
        title: RouteNames.OVERVIEW,
        component: OverviewComponent,
        data: ROUTES_DATA.overview,
      },
      {
        path: RouteNames.TASKBOARD,
        title: RouteNames.TASKBOARD,
        component: TaskboardComponent,
        data: ROUTES_DATA.taskboard,
      },
      {
        path: RouteNames.USER_PROFILE,
        title: RouteNames.USER_PROFILE,
        component: ProfileComponent,
        data: ROUTES_DATA.profile,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteFullPaths.LOGIN,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
