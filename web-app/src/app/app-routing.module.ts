import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutePaths } from 'src/lib/enum/routes';

import { OverviewComponent } from './modules/overview/overview.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { TaskboardComponent } from './modules/taskboard/taskboard.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: HomeRoutePaths.OVERVIEW,
        component: OverviewComponent,
      },
      {
        path: HomeRoutePaths.TASKBOARD,
        component: TaskboardComponent,
      },
      {
        path: HomeRoutePaths.USER_PROFILE,
        component: ProfileComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/overview',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
