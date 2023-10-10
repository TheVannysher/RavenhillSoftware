import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VineComponent } from './components/vine/vine.component';
import { TagComponent } from './components/tag/tag.component';
import { TextComponent } from './generics/text/text.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorComponent } from './navigator/navigator.component';
import { NavigatorItemComponent } from './navigator/navigator-item/navigator-item.component';
import { NgIconsModule } from '@ng-icons/core';
import icons from './icons';
import { NavigationServiceService } from './services/navigation-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './modules/profile/profile.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';

import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { CardComponent } from './components/card/card.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import settings from 'src/lib/settings/settings';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { TagSectionComponent } from './components/tag-section/tag-section.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CreateVineModalComponent } from './components/create-vine-modal/create-vine-modal.component';
import { CreateSepageModalComponent } from './components/create-sepage-modal/create-sepage-modal.component';
import { LoginComponent } from './modules/login/login.component';
import MatModules from './matModules';
import { NotfoundComponent } from './modules/notfound/notfound.component';
import { InputComponent } from './generics/form/fields/input/input.component';
import { CenteredSpinnerComponent } from './generics/loading/centered-spinner/centered-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    VineComponent,
    TagComponent,
    TextComponent,
    NavigatorComponent,
    NavigatorItemComponent,
    ProfileComponent,
    TaskboardComponent,
    CardWrapperComponent,
    CardComponent,
    ButtonIconComponent,
    TagSectionComponent,
    DashboardComponent,
    CreateVineModalComponent,
    CreateSepageModalComponent,
    LoginComponent,
    NotfoundComponent,
    InputComponent,
    CenteredSpinnerComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
