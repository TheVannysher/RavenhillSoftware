import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VineComponent } from './vine/vine.component';
import { VinesListComponent } from './List/vines-list/vines-list.component';
import { TagComponent } from './tag/tag.component';
import { TagListComponent } from './List/tag-list/tag-list.component';
import { TextComponent } from './generics/text/text.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorComponent } from './navigator/navigator.component';
import { NavigatorItemComponent } from './navigator/navigator-item/navigator-item.component';
import { NgIconsModule } from '@ng-icons/core';
import icons from './icons';
import { NavigationServiceService } from './services/navigation-service.service';

@NgModule({
  declarations: [
    AppComponent,
    VineComponent,
    VinesListComponent,
    TagComponent,
    TagListComponent,
    TextComponent,
    NavigatorComponent,
    NavigatorItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ...icons }),
  ],
  providers: [
    NavigationServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
