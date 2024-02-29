import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteCategories, RouteFullPaths, RouteNames } from 'src/lib/enum/routes';
import ROUTES_DATA from 'src/lib/routes/routesData';

import { ControlPanelComponent } from '#modules/control-panel/control-panel.component';
import { EditOrCreateFieldComponent } from '#modules/control-panel/field/edit-or-create-field/edit-or-create-field.component';
import { FieldListComponent } from '#modules/control-panel/field/field-list/field-list.component';
import { ListsPanelComponent } from '#modules/control-panel/lists-panel/lists-panel.component';
import { HomeComponent } from '#modules/home/home.component';
import { PageNotFoundComponent } from '#modules/page-not-found/page-not-found.component';

import { authGuard } from './guards/auth/auth.guard';
import { adminGuard } from './guards/roles/admin.guard';
import { OverviewComponent } from './modules/home/overview/overview.component';
import { ProfileComponent } from './modules/home/profile/profile.component';
import { TaskboardComponent } from './modules/home/taskboard/taskboard.component';
import { LoginComponent } from './modules/login/login.component';
import { managerGuard } from './guards/roles/manager.guard';

const routes: Routes = [
  {
    title: RouteNames.LOGIN,
    path: RouteCategories.LOGIN,
    component: LoginComponent,
  },
  {
    path: RouteCategories.HOME,
    canActivate: [authGuard],
    data: ROUTES_DATA.overview,
    component: HomeComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: RouteNames.OVERVIEW,
      },
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
    path: RouteCategories.CONTROL_PANEL,
    title: RouteCategories.CONTROL_PANEL,
    component: ControlPanelComponent,
    data: ROUTES_DATA['control-panel'],
    canActivate: [authGuard, managerGuard],
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'lists-panel',
        title: RouteNames.LISTS_PANEL,
        data: ROUTES_DATA['lists-panel'],
      },
      {
        path: 'lists-panel',
        title: RouteNames.LISTS_PANEL,
        component: ListsPanelComponent,
        data: ROUTES_DATA['lists-panel'],
      },
      {
        path: RouteNames.FIELD_MANAGEMENT,
        component: FieldListComponent,
      },
      {
        path: `${RouteNames.FIELD_MANAGEMENT}/create`,
        component: EditOrCreateFieldComponent,
      },
      {
        path: `${RouteNames.FIELD_MANAGEMENT}/edit/:id`,
        component: EditOrCreateFieldComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteFullPaths.OVERVIEW,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
