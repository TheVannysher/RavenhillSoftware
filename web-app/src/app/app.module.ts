import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VineComponent } from './vine/vine.component';
import { VinesListComponent } from './List/vines-list/vines-list.component';
import { TagComponent } from './tag/tag.component';
import { TextComponent } from './generics/text/text.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorComponent } from './navigator/navigator.component';
import { NavigatorItemComponent } from './navigator/navigator-item/navigator-item.component';
import { NgIconsModule } from '@ng-icons/core';
import icons from './icons';
import { NavigationServiceService } from './services/navigation-service.service';
import { VineUpdateComponent } from './vine/vine-update/vine-update.component';
import { VineCreateComponent } from './vine/vine-create/vine-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { TaskboardComponent } from './taskboard/taskboard.component';

import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
  declarations: [
    AppComponent,
    VineComponent,
    VinesListComponent,
    TagComponent,
    TextComponent,
    NavigatorComponent,
    NavigatorItemComponent,
    VineUpdateComponent,
    VineCreateComponent,
    ProfileComponent,
    TaskboardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatBadgeModule,
    NgIconsModule.withIcons({ ...icons }),
  ],
  providers: [
    NavigationServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
