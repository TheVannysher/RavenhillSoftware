import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinesListComponent } from './List/vines-list/vines-list.component';
import { TagComponent } from './tag/tag.component';
import { VineComponent } from './vine/vine.component';

const routes: Routes = [
  { path: '', component: VineComponent },
  { path: 'vines', component: VinesListComponent },
  { path: '**', component: TagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
