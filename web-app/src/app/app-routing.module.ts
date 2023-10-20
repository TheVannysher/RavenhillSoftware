import { NgModule } from '@angular/core';
import { RouterModule, Routes as NGRoutes } from '@angular/router';
import { RoutesPaths } from 'src/lib/enum/routes';

import TaskboardComponent from './components/taskboard/taskboard.component';
import VineComponent from './components/vine/vine.component';
import { authGuard } from './guards/auth/auth.guard';
import DashboardComponent from './modules/dashboard/dashboard.component';
import LoginComponent from './modules/login/login.component';
import NotfoundComponent from './modules/notfound/notfound.component';
import ProfileComponent from './modules/profile/profile.component';

export interface RouteData {
  icon: string,
  name: RoutesPaths,
}

export interface Routes extends NGRoutes {
  data?: RouteData
}

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesPaths.LOGIN,
    pathMatch: 'full',
  },
  {
    path: RoutesPaths.LOGIN,
    component: LoginComponent,
    data: { icon: 'featherFeather', name: RoutesPaths.LOGIN },
  },
  {
    path: RoutesPaths.DASHBOARD,
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: ':id', component: VineComponent },
    ],
    data: { icon: 'featherFeather', name: RoutesPaths.DASHBOARD },
  },
  {
    path: RoutesPaths.PROFILE,
    component: ProfileComponent,
    canActivate: [authGuard],
    data: { icon: 'featherUser', name: RoutesPaths.PROFILE },
  },
  {
    path: RoutesPaths.TASKBOARD,
    component: TaskboardComponent,
    canActivate: [authGuard],
    data: { icon: 'featherCheckCircle', name: RoutesPaths.TASKBOARD },
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
