import { NgModule } from '@angular/core';
import { RouterModule, Routes as NGRoutes } from '@angular/router';
import { ROUTES_PATH } from 'src/lib/enum/routes';
import { VinesListComponent } from './List/vines-list/vines-list.component';
import { TagComponent } from './tag/tag.component';
import { VineComponent } from './vine/vine.component';

export interface RouteData {
  icon: string,
  name: ROUTES_PATH,
}

export interface Routes extends NGRoutes {
  data?: RouteData
}

const routes: Routes = [
  { path: '', component: VinesListComponent, data: { icon: 'featherFeather', name: ROUTES_PATH.vines } },
  {
    path: ROUTES_PATH.vines,
    component: VinesListComponent,
    children: [
      { path: ':id', component: VineComponent }
    ],
    data: { icon: 'featherFeather', name: ROUTES_PATH.vines }
  },
  { path: ROUTES_PATH.user_profile, component: VineComponent, data: { icon: 'featherUser' , name: ROUTES_PATH.user_profile } },
  { path: ROUTES_PATH.work_order, component: VineComponent, data: { icon: 'featherCheckCircle', name: ROUTES_PATH.work_order } },
  { path: '**', component: TagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
