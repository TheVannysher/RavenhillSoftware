import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNames, RouteCategories, RouteFullPaths } from 'src/lib/enum/routes';

import { OverviewComponent } from './modules/overview/overview.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { TaskboardComponent } from './modules/taskboard/taskboard.component';
import { NG_ICONS } from './icons';
import { RouteIconTypes } from 'types/navigation/routes.types';
import ROUTES_DATA from 'src/lib/routes/routesData';

const routes: Routes = [
  {
    path: RouteCategories.HOME,
    children: [
      {
        path: RouteNames.OVERVIEW,
        component: OverviewComponent,
        data: ROUTES_DATA.overview,
      },
      {
        path: RouteNames.TASKBOARD,
        component: TaskboardComponent,
        data: ROUTES_DATA.taskboard,
      },
      {
        path: RouteNames.USER_PROFILE,
        component: ProfileComponent,
        data: ROUTES_DATA.profile,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteFullPaths.OVERVIEW,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
