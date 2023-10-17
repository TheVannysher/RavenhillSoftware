import { NgModule } from '@angular/core';
import { RouterModule, Routes as NGRoutes } from '@angular/router';
import { ROUTES_PATH } from 'src/lib/enum/routes';

import TaskboardComponent from './components/taskboard/taskboard.component';
import VineComponent from './components/vine/vine.component';
import { authGuard } from './guards/auth/auth.guard';
import DashboardComponent from './modules/dashboard/dashboard.component';
import LoginComponent from './modules/login/login.component';
import NotfoundComponent from './modules/notfound/notfound.component';
import ProfileComponent from './modules/profile/profile.component';

export interface RouteData {
  icon: string,
  name: ROUTES_PATH,
}

export interface Routes extends NGRoutes {
  data?: RouteData
}

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES_PATH.login,
    pathMatch: 'full',
  },
  {
    path: ROUTES_PATH.login,
    component: LoginComponent,
    data: { icon: 'featherFeather', name: ROUTES_PATH.login },
  },
  {
    path: ROUTES_PATH.vines,
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: ':id', component: VineComponent },
    ],
    data: { icon: 'featherFeather', name: ROUTES_PATH.vines },
  },
  {
    path: ROUTES_PATH.profile,
    component: ProfileComponent,
    canActivate: [authGuard],
    data: { icon: 'featherUser', name: ROUTES_PATH.profile },
  },
  {
    path: ROUTES_PATH.taskboard,
    component: TaskboardComponent,
    canActivate: [authGuard],
    data: { icon: 'featherCheckCircle', name: ROUTES_PATH.taskboard },
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
