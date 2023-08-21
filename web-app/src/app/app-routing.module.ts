import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VineComponent } from './vine/vine.component';

const routes: Routes = [
  { path: '/', component: VineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
