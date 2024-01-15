import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule } from '@ng-icons/core';

import { MenuItemComponent } from '#components/menu/menu-item/menu-item.component';
import { HeaderComponent } from '#components/navigation/header/header.component';
import { ItemComponent } from '#components/navigation/navigator/item/item.component';
import { NavigatorComponent } from '#components/navigation/navigator/navigator.component';
import { PageWrapperComponent } from '#components/page-wrapper/page-wrapper.component';
import settings from '#lib/settings/settings';
import { ControlPanelComponent } from '#modules/control-panel/control-panel.component';
import { FieldListComponent } from '#modules/control-panel/field/field-list/field-list.component';
import { LoginComponent } from '#modules/login/login.component';
import { OverviewComponent } from '#modules/overview/overview.component';
import { ProfileComponent } from '#modules/profile/profile.component';
import { TaskboardComponent } from '#modules/taskboard/taskboard.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import icons from './icons';
import MatModules from './matModules';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    OverviewComponent,
    TaskboardComponent,
    ProfileComponent,
    HeaderComponent,
    PageWrapperComponent,
    LoginComponent,
    MenuItemComponent,
    ControlPanelComponent,
    FieldListComponent,
    ItemComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...MatModules,
    NgIconsModule.withIcons({ ...icons }),
    provideFirebaseApp(() => initializeApp(settings.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
