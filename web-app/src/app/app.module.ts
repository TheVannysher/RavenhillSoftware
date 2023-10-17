import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule } from '@ng-icons/core';
import settings from 'src/lib/settings/settings';

import AppComponent from './app.component';
import AppRoutingModule from './app-routing.module';
import ButtonIconComponent from './components/button-icon/button-icon.component';
import CardComponent from './components/card/card.component';
import CardWrapperComponent from './components/card-wrapper/card-wrapper.component';
import TagComponent from './components/tag/tag.component';
import TagSectionComponent from './components/tag-section/tag-section.component';
import TaskboardComponent from './components/taskboard/taskboard.component';
import VineComponent from './components/vine/vine.component';
import InputComponent from './generics/form/fields/input/input.component';
import CenteredSpinnerComponent from './generics/loading/centered-spinner/centered-spinner.component';
import icons from './icons';
import MatModules from './matModules';
import DashboardComponent from './modules/dashboard/dashboard.component';
import LoginComponent from './modules/login/login.component';
import NotfoundComponent from './modules/notfound/notfound.component';
import ProfileComponent from './modules/profile/profile.component';
import NavigatorComponent from './navigator/navigator.component';
import NavigatorItemComponent from './navigator/navigator-item/navigator-item.component';
import NavigationServiceService from './services/navigation-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonIconComponent,
    CardComponent,
    CardWrapperComponent,
    DashboardComponent,
    NavigatorComponent,
    NavigatorItemComponent,
    TagComponent,
    TaskboardComponent,
    ProfileComponent,
    TagSectionComponent,
    LoginComponent,
    NotfoundComponent,
    InputComponent,
    CenteredSpinnerComponent,
    VineComponent,
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
  providers: [
    NavigationServiceService,
  ],
  bootstrap: [AppComponent],
})
export default class AppModule { }
