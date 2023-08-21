import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VineComponent } from './vine/vine.component';
import { VinesListComponent } from './List/vines-list/vines-list.component';
import { TagComponent } from './tag/tag.component';
import { TagListComponent } from './List/tag-list/tag-list.component';
import { TextComponent } from './generics/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    VineComponent,
    VinesListComponent,
    TagComponent,
    TagListComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
